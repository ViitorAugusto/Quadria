"use client"
import BannerSection from "./_components/banner-section";
import HeroSection from "./_components/hero-section";
import { Management } from "./_components/management";
import { People } from "./_components/people";
import { ServiceSection } from "./_components/service-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BannerSection />
      <People />
      <Management /> 
    </div>
  );
}
