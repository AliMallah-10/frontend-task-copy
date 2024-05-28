import { useState } from "react";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { profileDropDown } from "@/constants/ProfileLinks";

const ProfileDropdown = () => {
  const t = useTranslations();
  const locale = useLocale(); // Get the current locale
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleDropdown}
        className="rounded-full bg-white text-center p-2"
      >
        <UserRound color="green" />
      </button>
      <div
        className={`absolute  mt-2 w-40 bg-opacity-65 bg-slate-800 rounded-md shadow-lg transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        } ${locale === "ar" ? "left-0" : "right-0"}`}
      >
        <ul className="py-0 text-sm">
          {profileDropDown.map(({ key, link }, index) => (
            <div
              key={index}
              className={`px-3 py-2 hover:bg-slate-900/30 cursor-pointer ${
                index !== profileDropDown.length - 1
                  ? "border-b border-gray-600"
                  : ""
              }`}
            >
              <Link href={link}>{t(key)}</Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
