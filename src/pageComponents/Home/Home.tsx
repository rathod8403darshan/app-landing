import React from "react";
import { useTheme } from "@/context/ThemeContext";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <HeroSection />
        <CardSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
