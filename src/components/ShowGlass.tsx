"use client";

import { useState } from "react";
import { ShowcaseCard } from "./cards";
import { CustomScrollX } from "./CustomScrollX";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const imgUrl =
  "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb";

export function ShowGlass() {
  const [viewHover, setViewHover] = useState(false);
  return (
    <section>
      <article className="flex justify-between w-11/12 lg:5/6 mx-auto py-5">
        <h2 className="font-[500] text-2xl">What's New</h2>
        <Link
          href="#"
          className="flex gap-2 items-center transition-all ease-in-out cursor-pointer"
          onMouseEnter={() => setViewHover(true)}
          onMouseLeave={() => setViewHover(false)}
        >
          <span
            className={`text-md font-[400] ${
              viewHover && "border-b border-night"
            }`}
          >
            View All
          </span>
          <span
            className={`flex item-center justify-center p-2 rounded-[50%] ${
              viewHover ? "bg-night" : "bg-ghost"
            }`}
          >
            <FaChevronRight color={viewHover ? "#FFF" : "#000"} size={12} />
          </span>
        </Link>
      </article>
      <CustomScrollX>
        <div className="flex justify-around gap-4 lg:gap-6">
          <div className="w-1/12"></div>
          <ShowcaseCard isNew={true} img={imgUrl} />
          <ShowcaseCard isNew={true} img={imgUrl} />
          <ShowcaseCard isNew={true} img={imgUrl} />
          <ShowcaseCard isNew={true} img={imgUrl} />
          <ShowcaseCard isNew={true} img={imgUrl} />
          <ShowcaseCard isNew={true} img={imgUrl} />
          <div className="w-1/12"></div>
        </div>
      </CustomScrollX>
    </section>
  );
}
