"use client";

import Header from '../components/header'
import Footer from '../components/footer'
import Testimonial from '../components/testimonial'
import { useState } from 'react';
import '../app/globals.css'

export default function Customers() {
  const [showCtaSection, setShowCtaSection] = useState(true);

  // Function to toggle the visibility of the conditional HTML part
  const toggleCtaSection = () => {
    setShowCtaSection(!showCtaSection);
  };

  return (
    <>
      <Header />
      <Testimonial />
      <Footer showCtaSection={showCtaSection} />
    </>
  )
}
