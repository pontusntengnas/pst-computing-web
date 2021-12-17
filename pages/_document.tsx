import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class PstComputingDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Pontus Schuster Tengnäs. Full Stack developer, Gothenburg, Sweden. FullStack. Göteborg."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PstComputingDocument;
