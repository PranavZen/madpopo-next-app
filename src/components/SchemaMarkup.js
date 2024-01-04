import Script from "next/script";

const SchemaMarkup = ({ data }) => {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "MadPopo",
    url: "https://madpopo.com",
    image: "https://madpopo.com/image/header/madpopo-dark-logo.svg",
    description:
      "MadPopo high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+917039003001",
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://www.facebook.com/madpopowp/",
      "https://twitter.com/madpopowp",
      "https://www.linkedin.com/company/madpopowp/",
      "https://www.instagram.com/madpopowp/",
    ],
  };

  return (
    <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};

export default SchemaMarkup;
