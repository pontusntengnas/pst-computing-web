import Head from "next/head";
import * as React from "react";

interface Props {
  title: string;
}

export const Page: React.FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);
