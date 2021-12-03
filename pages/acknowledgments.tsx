import { NextPage } from "next";
import * as React from "react";
import { AcknowledgmentsPage } from "../features/acknowledgments/acknowledgments";
import { Page } from "./_page";

const Acknowledgments: NextPage = () => (
  <Page title={"Pontus | Full Stack Developer [Acknowledgments]"}>
    <AcknowledgmentsPage />
  </Page>
);

export default Acknowledgments;
