import React from "react";
import Link from "next/link";
import { navLinks } from "./Navlinks";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav>
        {navLinks.map((link, index) => {
          return (
            <Link className="" href={link.path}>
              <a key={index}>{link.name}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
