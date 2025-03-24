import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";

const KeyFeatures: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Wait for refs to be available before setting up animation
    const setupAnimation = () => {
      if (!scrollRef.current || !containerRef.current) return;

      const scrollElement = scrollRef.current;
      const containerElement = containerRef.current;

      gsap.to(scrollElement, {
        x: () => -(scrollElement.scrollWidth - containerElement.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerElement,
          start: "-50%",
          end: () => `+=${scrollElement.scrollWidth - containerElement.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(setupAnimation, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Exciting Features of Teen Patti Master
        </h2>
        
        <div ref={containerRef} className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-8 pl-4 pr-[calc(100vw-420px)]"> {/* Adjusted padding */}
            {[
              {
                title: "Immersive Gaming",
                desc: "Experience realistic graphics and authentic sound effects that transport you to a real casino environment",
                icon: "🎮"
              },
              {
                title: "Daily Rewards",
                desc: "Claim exciting daily bonuses and rewards. Spin the wheel for a chance to win big prizes every day",
                icon: "🎁"
              },
              {
                title: "Multiple Variations",
                desc: "Enjoy Classic Teen Patti, Speed TP, Tournaments and Private Tables with friends",
                icon: "🃏"
              },
              {
                title: "Secure Gaming",
                desc: "Play with confidence with our advanced encryption and fair play system",
                icon: "🛡️"
              },
              {
                title: "VIP Benefits",
                desc: "Access exclusive perks, higher table limits and special promotions as a VIP member",
                icon: "👑"
              },
              {
                title: "Social Features",
                desc: "Chat with players, send gifts and make friends from around the world",
                icon: "💬"
              },
              {
                title: "Practice Mode",
                desc: "Learn and practice for free before playing with real money",
                icon: "🎯"
              },
              {
                title: "24/7 Support",
                desc: "Get help anytime with our dedicated customer support team",
                icon: "🎧"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`flex-none w-[400px] ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/15'} backdrop-blur-lg rounded-2xl p-8 transition-all duration-300`}
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className={`inline-block ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/15'} backdrop-blur-lg rounded-xl p-8 transition-all duration-300`}>
            <h3 className="text-3xl font-bold text-white mb-4">Start Playing Now</h3>
            <p className="text-gray-200 text-lg mb-6">Download and get ₹1250 welcome bonus!</p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
