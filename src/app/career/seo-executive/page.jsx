import Footer from "@/components/Footer/Footer";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";
import React from "react";

export const metadata = {
    title:
      "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
    description:
      "Secure your online identity with our seamless domain registration services. Experience a smooth process, expert support, and competitive pricing at MadPopo.",
    keywords:
      "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  };

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg jdBg">
      <NavbarInner />
      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Job Description</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="jdDescriptionWrap">
        <div className="container">
          <div className="jdPage">
            <div className="jdWrap">
              <div className="positionTitle">
                <h1>SEO Executive</h1>
              </div>
              <div className="jdLocWrap">
                <div className="col-md-3 col-6 px-0">
                  <div className="jdLocBox">
                    <h4>Experience</h4>
                    <p>1-2 Years</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 px-0">
                  <div className="jdLocBox">
                    <h4>Location</h4>
                    <p>Saki Naka, Andheri (E), Mumbai</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 px-0">
                  <div className="jdLocBox">
                    <h4>Department</h4>
                    <p>Digital Marketing</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 px-0">
                  <div className="jdLocBox">
                    <h4>Employment</h4>
                    <p>Full Time</p>
                  </div>
                </div>
              </div>
              <div className="jdDataWrap">
                <div className="jdDataBox">
                  <div className="jdBoxTitle">
                    <h6>About Company:</h6>
                  </div>
                  <div className="jdParaBox">
                    <p>
                      Working in an industry that is constantly moving, MadPopo
                      is an offbeat Web Hosting and IT Solutions providing
                      company that is doing excellent work in the field of IT
                      since 2001. Started by a group of young science graduates,
                      Madpopo is now the leading force in software development
                      and IT services. From simple shopping carts to total
                      e-commerce solutions, we deliver you thoroughly
                      professional and friendly services giving you the highest
                      standards of quality.
                    </p>
                    <p>
                      We have offered our experienced service to some top-notch
                      names in a range of industries and various technology
                      segments. All our clients including corporate enterprises
                      to individual vendors boast of our comprehensive end to
                      end solutions that are able to match up to the customer
                      requirements. Trust MadPopo if you want nothing but the
                      best and within a framed deadline. We help you achieve
                      your targets in the most possible ways to accelerate your
                      business growth and earn substantial profits. We at
                      MadPopo believe in continuous innovation and learning, and
                      over the years have been serving a range of businesses and
                      industries. We encourage our customers and help them to
                      take lucrative online initiatives.
                    </p>
                  </div>
                </div>
                <div className="jdDataBox">
                  <div className="jdBoxTitle">
                    <h6>Job Description:</h6>
                  </div>
                  <div className="jdParaBox">
                    <ul className="jdList">
                      <li>
                        Conducting on-site and off-site analysis of web SEO
                        competition.
                      </li>
                      <li>
                        Using google analytics to conduct performance reports
                        regularly.
                      </li>
                      <li>Creating high-quality SEO content.</li>
                      <li>Assisting with blog content.</li>
                      <li>
                        Leading keyword research and optimization of content.
                      </li>
                      <li>Keeping up-to-date with developments in SEM.</li>
                    </ul>
                  </div>
                </div>
                <div className="jdDataBox">
                  <div className="jdBoxTitle">
                    <h6>Key Responsibilities:</h6>
                  </div>
                  <div className="jdParaBox">
                    <ul className="jdList">
                      <li>Marketing degree or related.</li>
                      <li>Extensive experience in SEO.</li>
                      <li>Working knowledge of Google Analytics.</li>
                      <li>Experience with coding techniques.</li>
                      <li>
                        Thorough understanding of web design and site
                        structures.
                      </li>
                      <li>Good knowledge of back link analysis.</li>
                    </ul>
                  </div>
                </div>
                <div className="jdDataBox">
                  <div className="jdBoxTitle">
                    <h6>Contact us:</h6>
                  </div>
                  <div className="jdParaBox">
                    <p>
                      Email ID:{" "}
                      <a href="mailto:hr@version-next.com">
                        hr@version-next.com
                      </a>
                    </p>
                  </div>
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

export default page;
