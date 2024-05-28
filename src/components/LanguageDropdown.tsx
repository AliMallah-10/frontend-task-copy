import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const localActive = useLocale();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    router.replace(`/${language}`);

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 border border-transparent hover:border-white rounded-md"
      >
        <Globe className="ml-2" />
        {localActive === "en" ? "English" : "عربي"}

        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute right-0 mt-2 w-full bg-opacity-65 bg-slate-800 rounded-md shadow-lg transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="py-0 text-sm">
          <li
            className="px-4 py-2 hover:bg-slate-900/30 cursor-pointer rounded-t-md"
            onClick={() => selectLanguage("ar")}
          >
            عربي
          </li>
          <hr />
          <li
            className="px-4 py-2 hover:bg-slate-900/30 cursor-pointer rounded-b-md"
            onClick={() => selectLanguage("en")}
          >
            English
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
