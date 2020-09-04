import React from "react";
import { ContactMeSection } from "../components/page-sections/contact-me-section/contact-me-section";
import Head from "next/head";

function ContactMePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Contact me | Peter Anderson </title>
      </Head>
      <ContactMeSection />
    </>
  );
}

export default ContactMePage;
