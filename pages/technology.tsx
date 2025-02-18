import React from "react";
import { TechnologySection } from "../components/page-sections/technology-section/technology-section";
import Head from "next/head";

function TechnologyPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Technology | Peter Anderson</title>
      </Head>
      <TechnologySection />
    </>
  );
}

export default TechnologyPage;
