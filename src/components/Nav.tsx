import Link from "next/link";

interface Props {
  navOpened: boolean;
  smallScreen: boolean;
}

export function NavMenu({ navOpened, smallScreen }: Props) {
  return (
    <nav
      className={`
        ${smallScreen && (navOpened ? "translate-x-0" : "-translate-x-full")}
        ${
          smallScreen
            ? "w-[45%] absolute p-4 top-[60px] z-10 h-screen bg-ghost left-0 transition-transform duration-300 ease-in-out"
            : "px-4 w-[33%]"
        }  `}
    >
      <ul className={`flex flex-col lg:flex-row gap-4`}>
        <li>
          <Link
            href="/"
            className="text-cerulean hover:text-aero transition-all duration-150 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-cerulean hover:text-aero transition-all duration-150 ease-in-out"
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-cerulean hover:text-aero transition-all duration-150 ease-in-out"
          >
            Link
          </Link>
        </li>
      </ul>
    </nav>
  );
}
