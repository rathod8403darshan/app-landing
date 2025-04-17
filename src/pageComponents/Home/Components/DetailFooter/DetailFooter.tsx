import React, { useEffect, useRef } from "react";
import { Button } from "@/components/Button/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/router";

const DetailFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Animate footer sections
    gsap.fromTo(
      contentRef.current?.children || [],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"
      } text-white py-16 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* About Section */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">About Teen Pattin Master</h3>
            <p className="text-gray-200 mb-4">
              Experience the thrill of Teen Patti and Rummy with India's most
              popular gaming platform. and win daily Rs.1000+ cash!
            </p>
            <div
              className="flex space-x-4"
              onClick={() =>
                router.replace(
                  "https://d3nkjlgjwt7x6o.cloudfront.net/cg/files/2zwnnkg7nwyo77zo2fm4yx9/Master_e658r.apk?ss=custom_default"
                )
              }
            >
              <Button
                variant="outline"
                size="sm"
                className="backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  How to Play
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Fantasy Cricket
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Fantasy Football
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Fantasy Kabaddi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Fantasy Basketball
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Fair Play Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-2 inline-block transform"
                >
                  Legality
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="hover:translate-x-2 transform transition-transform">
                Email: support@dream11.com
              </li>
              <li className="hover:translate-x-2 transform transition-transform">
                Phone: 1800-XXX-XXXX
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:scale-110 transform"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:scale-110 transform"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:scale-110 transform"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dream11. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <img
                src="/payment/visa.png"
                alt="Visa"
                className="h-8 hover:scale-110 transform transition-transform"
              />
              <img
                src="/payment/mastercard.jfif"
                alt="Mastercard"
                className="h-8 hover:scale-110 transform transition-transform"
              />
              <img
                src="/payment/upi.png"
                alt="UPI"
                className="h-8 hover:scale-110 transform transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
