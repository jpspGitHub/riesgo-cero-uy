import Image from "next/image";
import Header from "../ui/header";
import Footer from "../ui/footer";
import contactImage from "../../public/images/contact.jpg";
export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <Header />
      <section id="banner" className="style2">
        <div className="inner">
          <span className="image">
            <Image src={contactImage} width={10} height={50} alt="" />
            Foto de <a href="https://unsplash.com/es/@pawel_czerwinski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pawel Czerwinski</a> en <a href="https://unsplash.com/es/fotos/telefono-de-disco-negro-y-marron-cerca-de-la-pared-gris--0xCCPIbl3M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
          </span>
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
