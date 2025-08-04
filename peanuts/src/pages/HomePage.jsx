import React from "react";
import Hero from "../components/Hero";
import CardHover from "../components/CardHover";
import DusadFeatures from "../components/DusadFeatures";
import GallerySection from "../components/GallarySection";
import Certified from "../components/Certified";

function HomePage() {
  return (
    <div>
      <Hero />
      <CardHover />
      {/* <DusadFeatures /> */}
      <GallerySection />
      {/* <Certified /> */}
    </div>
  );
}

export default HomePage;
