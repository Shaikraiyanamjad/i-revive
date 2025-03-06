import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Topbar from "./components/Topbar";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import OurBlog from "./components/OurBlog";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import OurTeam from "./components/OurTeam";
import BackToTop from "./components/BackToTop";
export default function Home() {
  return (
   <div>
    <Topbar />
    <Header />
    <Herosection />
    <AboutUs />
    <WhatWeDo />
    <WhyChooseUs />
    <ContactForm />
    <OurTeam />
    <Testimonial />
    <OurBlog />
    <BackToTop />
    <Footer />
   </div>
  );
} 

