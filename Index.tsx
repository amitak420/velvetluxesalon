import { useEffect } from "react";
import Navbar from "@/components/velvet/Navbar";
import Hero from "@/components/velvet/Hero";
import BenefitsBar from "@/components/velvet/BenefitsBar";
import FeaturedCourses from "@/components/velvet/FeaturedCourses";
import AboutTrainer from "@/components/velvet/AboutTrainer";
import LimitedOffer from "@/components/velvet/LimitedOffer";
import LeadForm from "@/components/velvet/LeadForm";
import TrustSection from "@/components/velvet/TrustSection";
import FAQ from "@/components/velvet/FAQ";
import Footer from "@/components/velvet/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Velvet Luxe Salon & Academy | Beauty, Hair, Nail & Makeup";
    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    ensureMeta('description', 'Internationally certified Beauty, Hair, Nail & Makeup courses. EMI available. Limited seats for August—Enroll now.');
    // Canonical
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.setAttribute('rel','canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/');
  }, []);

  return (
    <main>
      <Navbar />
      <div className="space-y-10 md:space-y-16">
        <Hero />
        <LeadForm />
        <BenefitsBar />
        <FeaturedCourses />
        <AboutTrainer />
        <LimitedOffer />
        <TrustSection />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
