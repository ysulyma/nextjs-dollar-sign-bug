"use client";

import { $ } from "@/components/helper";

export default function Home() {
  return (
    <$>
      This produces an error "Element type is invalid: expected a string (for
      built-in components) or a class/function (for composite components) but
      got: array."
    </$>
  );
}
