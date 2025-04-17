import { Button } from "@/components/Button/Button";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/router";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Initial animations
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        textRef.current?.children || [],
        {
          x: -100,
          opacity: 0,
          rotateZ: -5,
        },
        {
          x: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
        },
        "-=0.3"
      );

    // Floating animation for buttons with smooth easing
    gsap.to(buttonsRef.current?.children || [], {
      y: "10px",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut", // Smoother sine wave easing
      stagger: {
        each: 2,
        from: "random",
      },
    });

    // Parallax effect
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className={`flex justify-center items-center w-full min-h-[90vh] relative overflow-hidden px-4 sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto relative z-10">
        <div ref={textRef} className="max-w-3xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            suppressHydrationWarning
          >
            Welcome to Teenpatti Master
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-4 sm:px-0">
            Experience the thrill of Teen Patti and Rummy with India's most
            popular gaming platform. and win daily Rs.1000+ cash!
          </p>
          <div onClick={()=> router.replace('https://dnmlpk.com/aw/e658r?f=w&p=wa&l=en&tp=m126&rtk=6gg%2BWxjf1RsskpUyshWfoMVyGqcEDmIRoDnkJ4H8iR8p5kxSmA%2F8LbSHALFRoEzGQFPzg84jY2%2FwrvxgsO60r%2FBk2bAx3F7CyxuWZqZozPoO2tcZ8%2B4NJfGUUW5LqpEKKOJczNC%2FYRpPWTco6VXPufXPhqRBtdlrD7c9KQ88WMi%2BC2GTGTBI5Qp85k%2BkAIKm&scenes=&scene=')} ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              Play Teen Patti 🎮
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="backdrop-blur-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              Join Tournament 🏆
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="backdrop-blur-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              Play Rummy 🃏
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="backdrop-blur-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              Daily Rewards 🎁
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="backdrop-blur-lg bg-green-500/20 hover:bg-green-500/30 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              Invite Friends 👥
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
