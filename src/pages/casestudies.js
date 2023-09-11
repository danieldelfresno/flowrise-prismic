import { useState } from "react";
import '../app/globals.css'
import Hero from "../components/hero";
import Footer from "../components/footer"
import Header from "../components/header"
import CaseStudiesFull from "../components/casestudiesfull"

export default function Customers() {
    const [showCtaSection, setShowCtaSection] = useState(true);
    const [showHeroReduced, setShowHeroReduced] = useState(true);

    // Function to toggle the visibility of the conditional HTML part
    const toggleCtaSection = () => {
        setShowCtaSection(!showCtaSection);
    };
    // Function to toggle the visibility of the conditional HTML part
    const toggleHeroSection = () => {
        setShowHeroReduced(!showHeroReduced);
    };

    return (
        <>
            <Header />
            <Hero showHeroReduced={showHeroReduced} />
            <CaseStudiesFull />
            <Footer showCtaSection={showCtaSection} />
        </>
    )

}