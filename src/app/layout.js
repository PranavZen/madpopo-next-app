// import "./globals.css";
import "../../src/css/bootstrap.css";
import "../../src/css/custom.css";
import "../../src/css/main.css";

// export const metadata = {
//   title:
//     "ddd",
//   description:
//     "Explore MadPopo's high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
