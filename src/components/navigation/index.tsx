import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`header ${
        !isHomePage
          ? "mx-auto max-w-5xl bg-white shadow-md py-2"
          : "max-w-[100%] bg-transparent px-8 py-4"
      }`}
      style={{
        clipPath:
          "polygon(5% 0px, 95% 0px, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
      }}
    >
      <NavLink
        to="/"
        className="w-10 h-10 bg-white items-center justify-center flex font-bold shadow-md"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <p className="blue-gradient_text">{!isHomePage ? <>IMF</> : <>I</>}</p>
      </NavLink>
      {!isHomePage && (
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
