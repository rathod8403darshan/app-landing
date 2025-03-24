import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

const AppDetails: React.FC = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    if (detailsRef.current) {
      const details = detailsRef.current.children;
      
      gsap.set(details, { 
        opacity: 0,
        y: 100 
      });
      
      gsap.to(details, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    }
  }, []);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Teen Patti Master App Details
        </h2>
        <div ref={detailsRef} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8">
          <table className="w-full text-white">
            <tbody>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">App Name</td>
                <td className="py-4 px-4 text-lg text-white/90">Teen Patti Master</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">Publisher</td>
                <td className="py-4 px-4 text-lg text-white/90">Taurus Cash Pvt. Ltd.</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">App Size</td>
                <td className="py-4 px-4 text-lg text-white/90">74.38 MB</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">App Version</td>
                <td className="py-4 px-4 text-lg text-white/90">38.65</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">Sign Up Bonus</td>
                <td className="py-4 px-4 text-lg text-white/90">₹1250</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">Refer Code</td>
                <td className="py-4 px-4 text-lg text-white/90">aeerh3</td>
              </tr>
              <tr className="border-b border-white/20">
                <td className="py-4 px-4 font-semibold text-lg text-white/90">Refer and Earn</td>
                <td className="py-4 px-4 text-lg text-white/90">Earn ₹20 when you sign up and Up to 33% commission for lifetime</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-lg text-white/90">APK Update</td>
                <td className="py-4 px-4 text-lg text-white/90">01/10/2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
