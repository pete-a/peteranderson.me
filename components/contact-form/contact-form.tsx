import React, { FormEvent, useState, useEffect } from "react";
import { ThemedButton } from "../button/button";
import { ThemedTextField, ThemedTextArea } from "../text-field/text-field";
import styles from "./contact-form.module.scss";
import { ThemedHeading } from "../heading/heading";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

/* @see https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
function validEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateForm(
  name: string,
  email: string,
  message: string
): { tag: "ok" } | { tag: "error"; errors: FormErrors } {
  const newErrors: FormErrors = {};
  let valid = true;
  if (name === "") {
    valid = false;
    newErrors.name = "Please enter your name";
  }

  if (email === "") {
    valid = false;
    newErrors.email = "Please enter your email address";
  } else if (!validEmail(email)) {
    valid = false;
    newErrors.email = "Please enter a valid email adress";
  }

  if (message === "") {
    valid = false;
    newErrors.message = "Please enter a message";
  }

  if (valid) {
    return { tag: "ok" };
  }
  return { tag: "error", errors: newErrors };
}

export type MessageData = {
  name: string;
  email: string;
  message: string;
};

interface Props {
  onValidSubmit: (data: MessageData) => Promise<"ok" | "error">;
}

export function ContactForm(props: Props): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"ok" | "error" | "success">(
    "ok"
  );

  useEffect(() => {
    setErrors((errors) => ({ ...errors, name: undefined }));
  }, [name]);

  useEffect(() => {
    setErrors((errors) => ({ ...errors, email: undefined }));
  }, [email]);

  useEffect(() => {
    setErrors((errors) => ({ ...errors, message: undefined }));
  }, [message]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const result = validateForm(name, email, message);

    switch (result.tag) {
      case "ok":
        setErrors({});
        setLoading(true);
        try {
          const apiResult = await props.onValidSubmit({ name, email, message });
          switch (apiResult) {
            case "ok":
              setFormStatus("success");
              break;
            case "error":
              setFormStatus("error");
          }
        } catch {
          setFormStatus("error");
        }
        setLoading(false);
        break;
      case "error":
        setErrors(result.errors);
    }
  }

  if (formStatus === "error") {
    return (
      <div className={styles.container} style={{ marginTop: "150px" }}>
        <ThemedHeading size="h3">Oops! Something went wrong 😕</ThemedHeading>
        <p>Please try again in a few minutes</p>
      </div>
    );
  }

  if (formStatus === "success") {
    return (
      <div className={styles.container} style={{ marginTop: "150px" }}>
        <ThemedHeading size="h3">Success! 🎉</ThemedHeading>
        <p>Your message has been sent.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.row}>
          <ThemedTextField
            label="Name"
            onChange={setName}
            error={errors.name}
            disabled={loading}
          />
        </div>
        <div className={styles.row}>
          <ThemedTextField
            label="Work email"
            type="email"
            onChange={setEmail}
            error={errors.email}
            disabled={loading}
          />
        </div>
        <div className={styles.messageRow}>
          <ThemedTextArea
            label="Your message"
            onChange={setMessage}
            error={errors.message}
            disabled={loading}
          />
        </div>
        <div className={styles.actionRow}>
          <ThemedButton disabled={loading} loading={loading}>
            Send
          </ThemedButton>
        </div>
      </form>
    </div>
  );
}
