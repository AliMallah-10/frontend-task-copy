"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import LanguageDropdown from "@/components/LanguageDropdown";
import SearchBar from "@/components/SearchBar";
import NavLinks from "@/components/NavLinks";
import Profiledropdown from "@/components/Profiledropdown";
import MobileNav from "@/components/MobileNav";
const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <SearchBar isVisible={isSearchVisible} onClose={toggleSearch} />
      <nav
        className={`fixed w-full top-0 z-50 flex items-center justify-between gap-8 py-4 px-8 transition-colors duration-300 ${
          isScrolled
            ? "bg-slate-900/50 backdrop-blur-md"
            : "bg-gradient-to-b from-secondary to-transparent"
        }`}
      >
        {/* mobile nav */}
        <button onClick={toggle} className="buttonMenu top-4 left-4 hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        {/* links side */}
        <div className="flex items-center justify-center gap-16">
          {/* logo */}
          <Link href="/" className="z-50">
            <Image
              src="/images/1001_LOGO.png"
              width={80}
              height={40}
              alt="1001_logo"
            />
          </Link>
          {/* nav links */}

          <NavLinks />
        </div>
        {/* Actions side */}
        <div className="flex items-center justify-center gap-8">
          {/* Search icon */}
          <span onClick={toggleSearch} className="cursor-pointer z-50">
            <Search />
          </span>
          {/* languages */}
          <div className="mobileDropdown">
            <LanguageDropdown />
          </div>

          <Profiledropdown />
        </div>
      </nav>
      <MobileNav isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
