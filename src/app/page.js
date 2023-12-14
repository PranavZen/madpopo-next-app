import DomainSection from "@/components/DomainSection";
import FAQ from "@/components/FAQs/FAQ";
import Footer from "@/components/Footer/Footer";
import Hostareawrap from "@/components/HostingArea/Hostareawrap";
import MaximizeSection from "@/components/MaximizeSection";
import Migration from "@/components/Migration";
import TrustedClientsSlide from "@/components/TrustedClients/TrustedClientsSlide";
import Banner from "@/components/banner/Banner";
import NavbarOuter from "@/components/navbar/NavbarOuter";
import SyncMain from "@/components/syncslider/SyncMain";

export const metadata = {
  title:
    "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
  description:
    "Explore MadPopo's high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
};

function Home() {
  return (
    <div className="site-wrapper overflow-hidden">
      <NavbarOuter />
      <Banner />
      <Migration />
      <SyncMain />
      <DomainSection />
      <MaximizeSection />
      <Hostareawrap />
      <div
        className="trusedPlanSection"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TrustedClientsSlide />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
