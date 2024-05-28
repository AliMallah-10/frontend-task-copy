import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Footer = () => {
  const t = useTranslations("Footer");
  const footerLinks = [
    "Home",
    "Contact us",
    "Privacy",
    "Terms and Conditions",
    "All Rights Reserved",
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black footer">
      {" "}
      <div className="justify-between items-center gap-6 soicalA hidden">
        <Facebook />
        <Youtube />
        <Instagram />
      </div>
      <div className="flex justify-between items-center p-8">
        <ul className="flex justify-between items-start gap-8 ulfooter">
          {footerLinks.map((link, index) => (
            <li key={index} className="hover:text-primary font-bold">
              <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                {t(`${index}`)}
              </Link>
            </li>
          ))}
          <li>©{` ${currentYear} `}</li>{" "}
        </ul>

        <div className="flex justify-between items-center gap-6 soicalH">
          <Facebook />
          <Youtube />
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
