import { Button } from "@/components/Button/Button";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-blue-600 w-full h-[90vh] to-blue-800 dark:from-blue-300 dark:to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" suppressHydrationWarning>
            Welcome to App
          </h1>
          <p className="text-xl mb-8">
            India's Biggest Sports Game - Play Fantasy Cricket, Football,
            Kabaddi & More!
          </p>
          <Button variant="outline" size="lg">
            Start Download Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
