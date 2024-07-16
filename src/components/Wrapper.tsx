import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export function Wrapper({ children }: Props) {
  return (
    <div className="relative w-full max-w-[160rem] bg-ghost min-h-screen">
      <Header />
      <div className="bg-blush min-h-screen">{children}</div>
      <footer></footer>
    </div>
  );
}
