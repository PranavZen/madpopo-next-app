import Footer from "@/components/Footer/Footer";
import NavbarOuter from "@/components/navbar/NavbarOuter";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="site-wrapper overflow-hidden error404Page">
      <NavbarOuter />
      <main className="errorPage">
        <h1>
          4
          <span> 
            <Image
              src="/image/face_1.png"
              alt="age not foung"
              width={125}
              height={173}
            />
          </span>
          4
        </h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
      </main>
      <Footer />
    </div>
  );
}
