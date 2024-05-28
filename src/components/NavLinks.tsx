"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations("Navbar");

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  // Define the array of keys to translate
  const navLinks = ["Home", "Series", "TV Shows", "Documentaries", "Kids"];
  return (
    <ul className="flex items-center justify-center gap-10 mobileLinks">
      {navLinks.map((link: string, index: number) => (
        <li
          key={index}
          className={`text-xl font-bold ${
            activeIndex === index ? "text-primary" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
            {t(`${index}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
