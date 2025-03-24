import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTheme } from '@/context/ThemeContext';

const Faq: React.FC = () => {
  const { theme } = useTheme();
  const faqRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const disclaimerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "What is Teen Patti Master ?",
      a: "Teen Patti Master is an online mobile card game app that originated in India. It is a gambling app that involves betting and requires a combination of skill, strategy and luck to win."
    },
    {
      q: "How to Download Teen Patti Master easily ?", 
      a: "It's very simple. Go to the site www.onlineteenpattiapp.in and download your favourite Teen Patti Master game."
    },
    {
      q: "Is Teen Patti Master app secure?",
      a: "Yes, Teen Patti Master uses advanced security measures to keep your personal information and transactions safe."
    },
    {
      q: "Is Teen Patti Master free to play?",
      a: "Yes, Teen Patti Master is free to play. We also offer in-game purchases for chips and exclusive features, but these are optional."
    },
    {
      q: "Can I play Teen Patti Master with friends?",
      a: "Absolutely! You can invite friends to join private rooms or connect with other players globally in real-time matches."
    },
    {
      q: "Are there different game modes available?",
      a: "Yes! Alongside classic Teen Patti, Teen Patti Master offers various game modes and tournament options to keep the gameplay exciting."
    },
    {
      q: "Can I win real money on Teen Patti Master?",
      a: "Yes. you can win daily Rs.1000 cash. You can also become reach by sharing app referral link or codes."
    },
    {
      q: "How do I contact customer support?",
      a: "If you have any problems, you can contact customer support through the app's help section."
    },
    {
      q: "What devices are compatible?",
      a: "Teen Patti Master is compatible with most iOS and Android smartphones and tablets. Check our website for specific device requirements."
    },
    {
      q: "How can I get free chips ?",
      a: "You can get free chips by claiming daily login bonuses, inviting friends, and joining special events and promotions."
    }
  ];

  const searchTerms = [
    "Teen Patti Master", "Teen Patti", "TeenPatti Master", "3Patti Master", 
    "Master Teen Patti", "Teen Patti Master APK", "Teen Patti Master APP",
    "Teen Patti Master download", "Teen patti Master 2024", "Master Teen Patti app",
    "3 Patti Master APK", "Download Teen Patti Master", "Teenpatti Master new version",
    "Teen Patti Master old version"
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Animate title
    tl.fromTo(titleRef.current,
      { 
        y: -50,
        opacity: 0,
        rotateX: -45
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate FAQ questions
    gsap.fromTo(questionsRef.current?.children || [],
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: questionsRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse"
        }
      }
    );

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
        stagger: 0.05,
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

  return (
    <div ref={faqRef} className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900'} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          FAQs - Teen Patti Master
        </h1>

        <div ref={questionsRef} className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/10'} backdrop-blur-lg rounded-lg p-6 ${theme === 'dark' ? 'hover:bg-gray-700/50' : 'hover:bg-white/20'} transition-all duration-300`}>
              <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-300'}`}>{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Top Search Queries</h2>
          <div ref={searchRef} className="flex flex-wrap justify-center gap-3">
            {searchTerms.map((term, index) => (
              <span key={index} className={`${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/10 hover:bg-white/20'} backdrop-blur-lg px-4 py-2 rounded-full text-sm text-gray-300 transition-all duration-300`}>
                {term}
              </span>
            ))}
          </div>
        </div>

        <div ref={disclaimerRef} className="mt-16 text-center text-gray-300 space-y-4">
          <p className={`${theme === 'dark' ? 'bg-red-900/20' : 'bg-red-500/20'} backdrop-blur-lg p-4 rounded-lg`}>
            Disclaimer: This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk. This game is strictly for users 18+.
          </p>
          <p className={`${theme === 'dark' ? 'bg-yellow-900/20' : 'bg-yellow-500/20'} backdrop-blur-lg p-4 rounded-lg`}>
            Warning: onlineteenpattiapp.in provides direct download links for Teen Patti Master and other apps, owned by Taurus.Cash. We don't own the Teen patti Master app or its copyrights; this site is for Teen Patti Master APK download only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;