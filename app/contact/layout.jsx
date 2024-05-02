import Image from "next/image";
import Header from "../ui/header";
import Footer from "../ui/footer";
import contactImageDesktop from "../../public/images/contact_desktop.webp";
import contactImageMobile from "../../public/images/contact_mobile.webp";

export const metadata = {
  title: "Riesto Cero Uy - Contacto",
  description: "La seguridad que te respalda en cada paso"
};
export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <Header />
      <section
        id="banner"
        className="style1"
        style={{
          backgroundImage: `url(${contactImageDesktop.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="inner">
          <header className="major">
            <h1>Contacto</h1>
          </header>
        </div>
      </section>
      <div id="main">{children}</div>
      <Footer />
    </div>
  );
}
