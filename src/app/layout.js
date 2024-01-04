// import "./globals.css";
import Script from "next/script";
import "../../src/css/bootstrap.css";
import "../../src/css/custom.css";
import "../../src/css/main.css";

// import "../../src/js/vendor.min.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <script
          type="application/ld+json"
          data-nscript="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "MadPopo",
            "url": "https://madpopo.com",
            "image": "https://madpopo.com/image/header/madpopo-dark-logo.svg",
            "description": "MadPopo high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+917039003001",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/madpopowp/",
              "https://twitter.com/madpopowp",
              "https://www.linkedin.com/company/madpopowp/",
              "https://www.instagram.com/madpopowp/"
      ]
    }`,
          }}
        />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
