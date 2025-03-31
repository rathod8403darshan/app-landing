import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

const TopSearch: React.FC = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Animate search terms
    gsap.fromTo(searchRef.current?.children || [],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: searchRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate disclaimer
    gsap.fromTo(disclaimerRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: disclaimerRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const searchTerms = [
    "Teen Patti Master", "Teen Patti", "TeenPatti Master", "3Patti Master",
    "Master Teen Patti", "Teen Patti Master APK", "Teen Patti Master APP",
    "Teen Patti Master download", "Teen patti Master 2024", "Master Teen Patti app",
    "3 Patti Master APK", "Download Teen Patti Master", "Teenpatti Master new version",
    "Teen Patti Master old version", "Teen Patti Master APK download",
    "Teenpatti Master online", "Teenpatti Master MOD APK", "Play Teen Patti Master",
    "Teen Patti Master real cash", "Teen Patti Master game", "Install Teen Patti Master",
    "Teen Patti Master for Android", "Teen Patti Master Purana"
  ];

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Popular Search Terms
        </h2>

        <div ref={searchRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {searchTerms.map((term, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-white/90 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              {term}
            </div>
          ))}
        </div>

        <div ref={disclaimerRef} className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white/90">
            <p className="mb-4 text-center">
              Download Teen Patti Master Apk today and start winning real cash!
            </p>
            
            <div className="text-sm opacity-80 space-y-3">
              <p className="text-yellow-300 font-semibold">
                Disclaimer:
              </p>
              <p>
                This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk. 
                This game is strictly for users 18+.
              </p>
              <p>
                Warning: onlineteenpattiapp.in provides direct download links for Teen Patti Master and other apps, owned by Taurus.Cash. 
                We don't own the Teen patti Master app or its copyrights; this site is for Teen Patti Master APK download only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSearch;
