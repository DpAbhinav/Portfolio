'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Work from "./components/Work";
import MasonryGallery from "@/app/components/MasonryGallery.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Gallery/>
        <MasonryGallery />
      <Work />  
      <About />
      <Contact/>
      <Footer/>
    </>
  );
}
