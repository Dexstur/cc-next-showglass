"use client";

import Image from "next/image";
import { Wrapper, ShowGlass } from "@/components";

export default function Home() {
  return (
    <Wrapper>
      <main className="pt-[80px]">
        <ShowGlass />
      </main>
    </Wrapper>
  );
}
