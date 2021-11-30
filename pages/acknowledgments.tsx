import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { AcknowledgmentsPage } from "../features/acknowledgments/acknowledgments";

const Acknowledgments: NextPage = () => (
  <>
    <Head>
      <title>Pontus | Full Stack Developer [Acknowledgments]</title>
    </Head>
    <AcknowledgmentsPage />
  </>
);

export default Acknowledgments;
