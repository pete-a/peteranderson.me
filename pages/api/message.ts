import { NextApiRequest, NextApiResponse } from "next";
import {
  validateForm,
  MessageData,
} from "../../components/contact-form/contact-form";
import { getEmailService } from "../../services/service-injection";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  emailService = getEmailService()
): Promise<void> => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  try {
    const data = JSON.parse(req.body);

    const validationResult = validateForm(
      data.name || "",
      data.email || "",
      data.message || ""
    );
    switch (validationResult.tag) {
      case "error":
        res.status(422).json({ errors: validationResult.errors });
        return;
      case "ok": {
        const messageData: MessageData = data;
        try {
          await emailService.sendEmail(messageData);
          res.status(200).json({ success: true });
          return;
        } catch (e) {
          console.error(e);
          res.status(500).end();
          return;
        }
      }
    }
  } catch {
    res.status(400).end();
  }
};
