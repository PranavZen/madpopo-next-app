import Image from "next/image";
import NavbarInner from "@/components/navbar/NavbarInner";
import Hostareawrap from "@/components/HostingArea/Hostareawrap";
import Footer from "@/components/Footer/Footer";
import Videocomponent from "@/components/globalvideocomponent/videocomponent";

export const metadata = {
  title:
    "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
  description:
    "Discover MadPopo's global infrastructure – the epitome of security, scalability, and reliability for all your applications in the Cloud.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  openGraph: {
    url: "https://madpopo.com/global-infrastructure",
    type: "website",
    images: [
      {
        url: "https://madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg",
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

function GlobalInfraStruct() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg gbInfraBg">
      <NavbarInner />

      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Global Infrastructure</h1>
            </div>
          </div>
        </div>
        <div className="gb_infraBoxSection">
          <div className="container">
            <div className="gb_infraBoxTitle">
              <h4 className="gb_infraTitle">MadPopo Global Infrastructure</h4>
              <p>
                The most secure, extensive, and reliable Global Cloud
                Infrastructure, for all your applications
              </p>
            </div>
            <div className="gb_infraBoxWrapper">
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <Image
                      src="/image/pages/globalInfra/8-regions.png"
                      alt="8 Regions"
                      width={41}
                      height={75}
                      priority
                    />
                  </div>
                  <h5>8 Regions</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <Image
                      src="/image/pages/globalInfra/14-data-center.png"
                      alt="14 Data Centers"
                      width={49}
                      height={75}
                      priority
                    />
                  </div>
                  <h5>14 Data Centers</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gb_infraBoxInner">
                  <div className="wp_fetureImageWrap">
                    <Image
                      src="/image/pages/globalInfra/35-nc.png"
                      alt="5Tbps+ NETWORK CAPACITY"
                      width={77}
                      height={75}
                      priority
                    />
                  </div>
                  <h5>35Tbps+ NETWORK CAPACITY</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container gb_mainParaText">
          <p className="coodiv-text-9 mb-12 btnDescTetx">
            When it comes to your online presence, speed is king. Our data
            centers provide the physical environment nessessary to keep your
            servers up and running 99.9% uptime guaranteed. That’s why we’ve
            built our global infrastructure to deliver top speeds. Because we
            own the network, infrastructure and facility on which your servers
            run, we can guarantee flexibility, reliability, security and
            redundancy for your digital assets. We have 14 data centers in 8
            regions including India, UAE, Singapore, United States, Germany,
            Australia and United Kingdom.
          </p>
        </div>
        <Hostareawrap />
        <Videocomponent />
        <div className="gb_infraDataSection">
          <div className="container">
            <div className="dataCenterTitle">
              <h5>
                What is it that ensures the reliability of our data centers?
              </h5>
            </div>
            <div className="dataCentersWrap">
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>Power Supply Redundancy</h3>
                  <p>
                    Ensuring uninterrupted power supply is crucial for
                    maintaining server uptime. That's why at Contabo, we've made
                    significant investments in our own transformer stations, N+1
                    UPS systems, and diesel power generators.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>Internet Connection Redundancy</h3>
                  <p>
                    A server is only valuable if it can be accessed from the
                    internet. To guarantee this, we install a minimum of two
                    distinct fiber connections at every data center and
                    collaborate with multiple carriers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>Cooling Redundancy</h3>
                  <p>
                    Servers produce a significant amount of heat, which can
                    cause them to overheat rapidly without continuous cooling.
                    That's why our data centers are furnished with redundant
                    (N+1) chillers and climate cabinets.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>DC Security</h3>
                  <p>
                    The security of servers commences with the physical security
                    of the data center. Each data center is outfitted with CCTV
                    and physical access control to prevent unauthorized entry to
                    any server.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>Efficient Energy</h3>
                  <p>
                    As we strive to offer you the best pricing, we also
                    prioritize environmental considerations. We leverage modern
                    technologies, such as Free Cooling and Groundwater Cooling,
                    wherever feasible to enhance energy efficiency. By consuming
                    less energy, we can offer you lower prices!
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dataCenterBoxWrap">
                  <h3>On-premises profressionals</h3>
                  <p>
                    To monitor the servers, we ensure that there are on-site
                    personnel present in each data center every day of the year,
                    including weekends and holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 gb_fooPose">
          <Image
            src="/image/footer_pose-1.png"
            alt="Footer Imgage"
            width={304}
            height={270}
            priority
          />
        </div>
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="rgb(36,40,55)"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

export default GlobalInfraStruct;
