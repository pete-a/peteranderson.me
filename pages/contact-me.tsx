import React from "react";
import { ContactMeSection } from "../components/page-sections/contact-me-section/contact-me-section";
import Head from "next/head";

function ContactMePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Peter Anderson | Contact me</title>
      </Head>
      <ContactMeSection />
    </>
  );
}

export default ContactMePage;
