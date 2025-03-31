import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/Button/Button";
import { Dropdown } from "@/components/Dropdown";
import { Input } from "@/components/Input";
import { useTheme } from "@/context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const formRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "feedback", label: "Feedback" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const tl = gsap.timeline({
      defaults: { 
        ease: "power4.out",
        duration: 1.2
      },
      scrollTrigger: {
        trigger: formWrapperRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Enhanced initial animations with staggered form fields
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
      }
    ).fromTo(formRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
      },
      "-=0.8"
    ).fromTo(formRef.current?.children || [],
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8
      },
      "-=1"
    );

    // Floating animation
    gsap.to(formRef.current, {
      y: "20px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submission animation
    const tl = gsap.timeline({
      defaults: { duration: 0.4 }
    });

    tl.to(formRef.current, {
      scale: 0.98,
      rotate: -2,
      ease: "back.in(1.7)"
    }).to(formRef.current, {
      scale: 1,
      rotate: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1.2
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success animation
    gsap.fromTo(formRef.current,
      { boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
      { 
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        duration: 1,
        yoyo: true,
        repeat: 1
      }
    );

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900'} py-20 px-4 sm:px-6 lg:px-8`}>
      <div ref={formWrapperRef} className="container mx-auto px-4 max-w-2xl relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,149,237,0.1),transparent_70%)]"></div>
        
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-white relative"
        >
          Get in Touch
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></div>
        </h1>
        
        <div 
          ref={formRef}
          className={`${
            theme === 'dark' 
              ? 'bg-gray-800/50' 
              : 'bg-white/10'
          } backdrop-blur-lg rounded-lg p-6 sm:p-10 relative z-10 transition-all duration-500 hover:shadow-2xl border border-opacity-20 ${
            theme === 'dark' ? 'border-gray-600' : 'border-white/20'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className={`transform transition-all duration-300 ${
                theme === 'dark' ? 'text-white focus:ring-blue-500' : ' text-white focus:ring-blue-400'
              }`}
            />
            <Input
              type="email"
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className={`transform transition-all duration-300 ${
                theme === 'dark' ? ' text-white focus:ring-blue-500' : 'text-white focus:ring-blue-400'
              }`}
            />
            <Dropdown
              label="Subject"
              options={subjects}
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Select a subject"
              required
              className={`transform transition-all duration-300 ${
                theme === 'dark' ? ' text-white' : ' text-white'
              }`}
            />
            <textarea
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className={`w-full rounded-lg p-3 border border-gray-600 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'text-white border-gray-600 focus:ring-blue-500' 
                  : ' text-white border-white/20 focus:ring-blue-400'
              } min-h-[120px] resize-none`}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full transform transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } relative overflow-hidden group`}
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                isSubmitting ? 'scale-x-100' : 'scale-x-0'
              } origin-left bg-blue-400/20`}></span>
              <span className="relative">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
