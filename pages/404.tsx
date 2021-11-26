import Link from "next/link";
import { Centered } from "../core-ui/building-blocks/centered/centered";
import { Stack } from "../core-ui/building-blocks/stack/stack";
import { BodyText } from "../core-ui/text/body-text";

export default function _404() {
  return (
    <Centered>
      <Stack centerContent>
        <BodyText text="404 - Hmm, nothing here!" />
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </Stack>
    </Centered>
  );
}
