import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
import gsap from "gsap";
import { useClickOutside } from "@/utils/useClickOutside";
import { useRouter } from "next/router";

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const { ref } = useClickOutside(() => setIsMenuOpen(false));
  const router = useRouter();

  useEffect(() => {
    if (mobileMenuRef.current && menuItemsRef.current) {
      if (isMenuOpen) {
        gsap.set(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
        });

        gsap.to(mobileMenuRef.current, {
          x: "0%",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Animate menu items with stagger
        gsap.fromTo(
          menuItemsRef.current.children,
          {
            x: 20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => router.pathname === path;

  return (
    <header
      className={`${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-r from-blue-50 via-white to-blue-50"
      } shadow-md relative z-50 sticky top-0`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
      <nav className="container mx-auto px-4 py-3 relative z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              App
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className={`${
                theme === "dark"
                  ? isActive("/home")
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                  : isActive("/home")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              href="/contact-us"
              className={`${
                theme === "dark"
                  ? isActive("/contact-us")
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                  : isActive("/contact-us")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } transition-colors duration-200`}
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className={`${
                theme === "dark"
                  ? isActive("/faq")
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                  : isActive("/faq")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } transition-colors duration-200`}
            >
              FAQ
            </Link>
            <Button 
              variant="primary" 
              size="sm"
              className="shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              Login
            </Button>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div ref={ref} className="z-[9999]">
          <div
            ref={mobileMenuRef}
            className={`fixed top-0 right-0 h-full max-h-screen w-[50vw] sm:w-80 ${
              theme === "dark"
                ? "bg-gradient-to-b from-gray-800 to-gray-900"
                : "bg-gradient-to-b from-white to-blue-50"
            } shadow-lg transform md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              zIndex: 9999,
              paddingTop: "4rem",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>

            {/* Close button */}
            <button
              className="absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 z-[9999]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div ref={menuItemsRef} className="px-4 space-y-4 relative z-[9999]">
              <Link
                href="/"
                className={`block ${
                  theme === "dark"
                    ? isActive("/")
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                    : isActive("/")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                href="/contact-us"
                className={`block ${
                  theme === "dark"
                    ? isActive("/contact-us")
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                    : isActive("/contact-us")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors duration-200`}
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className={`block ${
                  theme === "dark"
                    ? isActive("/faq")
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                    : isActive("/faq")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors duration-200`}
              >
                FAQ
              </Link>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
