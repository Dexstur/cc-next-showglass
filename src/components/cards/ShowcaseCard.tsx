"use client";

import Style from "styled-components";
import { useState } from "react";

interface ShowcaseCardProps {
  isNew: boolean;
  img: string;
}

const CardImg = Style.div<{ src: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-image: url(${({ src }) => src}) !important;
  background-size: 100% 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-size: 120% 120%;
  }
`;

export function ShowcaseCard({ isNew, img }: ShowcaseCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="w-3/5 lg:w-1/4 h-[320px] flex flex-shrink-0 flex-nowrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardImg src={img} className="relative bg-ghost">
        {isNew && (
          <span className="text-night text-xs bg-ghost py-1 px-2 absolute top-4 left-4 uppercase font-semibold">
            New
          </span>
        )}
        {hovered && (
          <button className="bg-night text-white hover:text-night text-sm flex gap-1 justify-center absolute bottom-2 right-4 py-2 px-4 transition-color hover:bg-neutral-100 transition-all ease-in-out">
            + Quick Add
          </button>
        )}
      </CardImg>
    </article>
  );
}
