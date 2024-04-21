import React from "react";
import { Link } from "react-router-dom";

import { socialLinks } from "@constants/index";

const Footer: React.FunctionComponent = () => (
  <footer className="footer font-poppins">
    <hr className="border-slate-200" />

    <div className="footer-container">
      <p className="text-center">
        © 2024 <strong>IMF Emambocus, MBCS</strong>. All rights reserved.
      </p>

      <div className="flex gap-3 justify-center items-center w-full sm:w-auto">
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target="_blank">
            <img
              src={link.iconUrl}
              alt={link.name}
              className="w-6 h-6 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
