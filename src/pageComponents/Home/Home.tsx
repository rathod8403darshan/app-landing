import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
import DetailFooter from "./Components/DetailFooter/DetailFooter";
import AppDetails from "./Components/AppDetails/AppDetails";
import KeyFeatures from "./Components/KeyFeatures/KeyFeatures";
import TopSearch from "./Components/TopSearch/TopSearch";
const Home: React.FC = () => {
  return (
    <div className="">
        <HeroSection />
        <CardSection />
        <KeyFeatures />
        <AppDetails />
        <TopSearch />
        <DetailFooter />
    </div>
  );
};

export default Home;
