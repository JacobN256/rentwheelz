import React from "react";
import Link from "next/link";

type NavBarProps = {
  links: {
    href: string;
    label: string;
  }[];
};

const Navbar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav className="flex flex-row h-[60px] justify-between bg-primary items-center px-4">
      <div className="flex">
        <Link
          href="/"
          className="underline text-white hover:white visited:white"
        >
          RentWheelz
        </Link>
      </div>
      <div className="flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="no-underline text-white hover:white visited:white px-2 uppercase"
          >
            {link.label}
          </Link>
        ))}
        <span className="text-white">Profile Icon</span>
      </div>
    </nav>
  );
};

export default Navbar;
