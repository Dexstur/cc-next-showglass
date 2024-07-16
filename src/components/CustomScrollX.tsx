"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import styled from "styled-components";

interface CustomScrollXProps {
  children: ReactNode;
}

const ScrollContainer = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
  padding-bottom: 24px;
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in WebKit browsers */
  }
`;

const Content = styled.div`
  display: flex;
  width: 200%; /* Adjust based on your content */
  background: lightgray; /* Example background */
`;

const ScrollBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: white;
`;

const ScrollProgress = styled.div<{ width: number }>`
  height: 100%;
  background: black;
  border-radius: 2px;
  width: ${(props) => props.width}%;
  transition: width 0.2s ease-out;
`;

export function CustomScrollX({ children }: CustomScrollXProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState(10);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    const scrollPercentage = (scrollLeft / totalScrollWidth) * 100;
    const setPercentage =
      scrollPercentage >= 90 ? scrollPercentage : scrollPercentage + 10;
    setScrollWidth(setPercentage);
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative w-full">
      <ScrollContainer ref={containerRef}>{children}</ScrollContainer>
      <div className="w-11/12 mx-auto h-[4px] bg-white transition-colors ease-in rounded-sm">
        <ScrollProgress width={scrollWidth} />
      </div>
    </div>
  );
}
