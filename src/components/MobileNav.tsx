"use client";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { FC } from "react";
import LanguageDropdown from "@/components/LanguageDropdown";
interface MobileNavProps {
  isOpen: boolean;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-black z-30 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-full`}
    >
      <div className="flex flex-col justify-start items-start gap-6 p-10 mt-10">
        <nav>
          {navLinks.map((link, index) => (
            <Link href={`/${link.toLowerCase()}`} key={index}>
              <p className="text-white text-2xl py-2 hover:bg-gray-800 w-full">
                {link}
              </p>
            </Link>
          ))}
        </nav>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default MobileNav;
