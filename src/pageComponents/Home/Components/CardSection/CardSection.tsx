import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

const CardSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Animate cards
    gsap.fromTo(cardsRef.current?.children || [],
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Choose Us?
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">🏏</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Multiple Sports
            </h3>
            <p className="text-gray-200">
              Play fantasy cricket, football, kabaddi, and more!
            </p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">💰</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Win Big
            </h3>
            <p className="text-gray-200">
              Compete in contests and win exciting prizes
            </p>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-6">🎮</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Easy to Play
            </h3>
            <p className="text-gray-200">
              Simple interface and quick team selection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
