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
  openGraph: {
    url: "https://madpopo.com/",
    type: "website",
    images: [
      {
        url: "https://madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
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
      >
        <TrustedClientsSlide />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
