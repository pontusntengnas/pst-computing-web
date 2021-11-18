import * as React from "react";
import { Stack } from "../core-ui/building-blocks/stack/stack";
import { TextLink } from "../core-ui/link/text-link";
import { BodyText } from "../core-ui/text/body-text";
import { Header } from "../core-ui/text/header";

interface Props {}

interface Acknowledgment {
  name: string;
  url: string;
  licenseText: string;
}

const acknowledgments: Array<Acknowledgment> = [
  {
    name: "next",
    url: "https://github.com/vercel/next.js",
    licenseText: `The MIT License (MIT)

  Copyright (c) 2021 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`,
  },
  { name: "react", url: "", licenseText: "" },
  { name: "react-dom", url: "", licenseText: "" },
  { name: "eslint", url: "", licenseText: "" },
  { name: "eslint-config-next", url: "", licenseText: "" },
  { name: "eslint-config-prettier", url: "", licenseText: "" },
  { name: "prettier", url: "", licenseText: "" },
  { name: "typescript", url: "", licenseText: "" },
  { name: "Roboto Mono (font)", url: "", licenseText: "" },
];

export const AcknowledgmentsPage: React.VFC<Props> = () => (
  <Stack margin={30}>
    <Header text={"Acknowledgments"} />
    <BodyText
      text={
        "This page is using the open source software listed below. A big 'thank you' to all the creators of these amazing products and services."
      }
    />

    {acknowledgments.sort(byName).map(({ name, licenseText, url }) => (
      <>
        <Header text={name} size={2} key={name} />
        <TextLink url={url} text={url} />
        <BodyText text={licenseText} />
      </>
    ))}
  </Stack>
);

const byName = (a: Acknowledgment, b: Acknowledgment): 1 | 0 | -1 => {
  const aName = a.name.toLowerCase();
  const bName = b.name.toLowerCase();

  return aName === bName ? 0 : aName > bName ? 1 : -1;
};
