"use client";

import Header from '../components/header'
import Hero from '../components/hero';
import Footer from '../components/footer';
import WhoWeAre from '../components/whoweare'
import WhyTrustUs from '../components/whytrustus'
import CoreTech from '../components/coretech';
import Portfolio from '../components/portfolio';
import { useState } from 'react';
import CaseStudies from '../components/casestudies';


export default function Home() {
  const [showCtaSection, setShowCtaSection] = useState(true);

  // Function to toggle the visibility of the conditional HTML part
  const toggleCtaSection = () => {
    setShowCtaSection(!showCtaSection);
  };

  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <WhyTrustUs />
      <CoreTech />
      <Portfolio />
      <CaseStudies />
      <Footer showCtaSection={showCtaSection} />
    </>
  )
}
