import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Nav links
const navLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/#services",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Residential Interior",
        to: "/residential-interior",
      },
      {
        label: "Commercial Interior",
        to: "/commercial-interior",
      },
    ],
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "How we work",
    to: "/how-we-work",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  // Determine active link based on current path
  const getIsActive = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Prevent background scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-secondary/20 bg-light shadow-sm">
      <div className="container relative flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1.5"
            />
            <path
              d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1.5"
            />
            <path
              d="M16 16L20 12"
              stroke="currentColor"
              className="text-primary"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-normal text-dark">minimal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.to);

            // Special case for the links with hash
            const isHashLink = link.to.includes("#");

            if (isHashLink) {
              return (
                <div key={link.label} className="group relative">
                  <a
                    href={link.to}
                    className={`relative py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                        : "text-text hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 inline-block h-4 w-4"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </a>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="invisible absolute left-0 z-50 mt-1 w-56 origin-top-left scale-95 transform overflow-hidden rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="block px-4 py-2 text-text transition-colors hover:bg-background hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.to}
                className={`relative py-2 text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 inline-block h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded transition hover:bg-background md:hidden"
          aria-label="Open navigation"
          onClick={() => setNavOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {navOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile nav menu */}
        <div
          className={`fixed inset-0 z-40 bg-dark/40 transition-opacity duration-200 ${
            navOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!navOpen}
          onClick={() => setNavOpen(false)}
        >
          <nav
            className={`absolute right-0 top-0 flex h-full w-64 flex-col gap-2 bg-white px-6 pt-16 shadow-lg transition-transform duration-200 ${
              navOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => {
              const isActive = getIsActive(link.to);
              const isHashLink = link.to.includes("#");

              if (isHashLink) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <a
                      href={link.to}
                      className={`rounded border-b-2 px-2 py-3 pb-1 text-lg font-semibold uppercase tracking-wide transition-colors ${
                        isActive
                          ? "border-primary bg-light text-primary"
                          : "border-transparent text-text hover:border-primary hover:text-primary"
                      }`}
                      style={{ letterSpacing: "0.04em" }}
                      onClick={(e) => {
                        if (link.hasDropdown) {
                          e.preventDefault(); // Prevent navigation if has dropdown
                        } else {
                          setNavOpen(false);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                    {link.hasDropdown && link.dropdownItems && (
                      <div className="mt-2 space-y-2 pl-4">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block py-2 text-text transition-colors hover:text-primary"
                            onClick={() => setNavOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`rounded border-b-2 px-2 py-3 pb-1 text-lg font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "border-primary bg-light text-primary"
                      : "border-transparent text-text hover:border-primary hover:text-primary"
                  }`}
                  style={{ letterSpacing: "0.04em" }}
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
