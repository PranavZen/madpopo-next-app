// import "./globals.css";
import Script from "next/script";
import "../../src/css/bootstrap.css";
import "../../src/css/custom.css";
import "../../src/css/main.css";

// import "../../src/js/vendor.min.js";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
