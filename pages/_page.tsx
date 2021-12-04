import Head from "next/head";
import * as React from "react";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

function Page({ title, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}

export default Page;
