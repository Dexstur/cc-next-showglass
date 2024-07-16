"use client";
import { LiaBarsSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { NavMenu } from "./Nav";
import { UserOptions } from "./UserOptions";
import { Cart } from "./Cart";

export function Header() {
  const [navOpened, setNavOpened] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpened(false);
        setSmallScreen(false);
      } else {
        setSmallScreen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggle() {
    setOpenCart(false);
    setNavOpened((prev) => !prev);
  }

  function toggleCart() {
    setNavOpened(false);
    setOpenCart((prev) => !prev);
  }
  return (
    <header
      className={`fixed w-full h-[60px] py-2 px-2 lg:px-4 transition-colors duration-200 ${
        navOpened || openCart || isScrolled ? "bg-ghost" : "bg-transparent"
      } flex justify-between items-center z-30`}
    >
      <div className="toggler lg:hidden">
        {navOpened ? (
          <span
            className="flex items-center justify-center p-3 cursor-pointer border border-[#ccc] rounded-sm"
            onClick={toggle}
          >
            <IoCloseOutline />
          </span>
        ) : (
          <span
            className="flex items-center justify-center p-3 cursor-pointer border border-[#ccc] rounded-sm"
            onClick={toggle}
          >
            <LiaBarsSolid />
          </span>
        )}
      </div>
      <NavMenu navOpened={navOpened} smallScreen={smallScreen} />
      <div className="w-[33%] text-center">
        <h2 className="text-2xl font-bold uppercase">Belle</h2>
      </div>
      <UserOptions toggleCart={toggleCart} />
      <span
        className="cursor-pointer lg:hidden flex justify-center items-center p-2"
        onClick={() => {
          setNavOpened(false);
          setOpenCart((prev) => !prev);
        }}
      >
        <FiShoppingCart />
      </span>
      <Cart openCart={openCart} onClose={() => setOpenCart(false)} />
    </header>
  );
}
