"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "../ui/header";
import { data } from "../lib/data";
import { Contact } from "../ui/contact";
import Footer from "../ui/footer";
import defaultServiceImage from "./../../public/images/services/default-service.jpg";
export default function Layout({ children }) {
  var { id } = useParams();
  var service = data.services.items.find((item) => item.id == id);

  var getServiceBanner = () => {
    return (
      <>
        <div className="inner">
          <span className="image">
            <Image src={service.image} width={10} height={50} alt="" />
          </span>
          <header className="major">
            <h1>{service.title}</h1>
          </header>
        </div>
      </>
    );
  };

  var getGenericBanner = () => {
    return (
      <>
        <div className="inner">
          <span className="image">
            <Image src={defaultServiceImage} width={10} height={50} alt="" />
            Foto de <a href="https://unsplash.com/es/@cytonn_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cytonn Photography</a> en <a href="https://unsplash.com/es/fotos/dos-personas-dandose-la-mano-n95VMLxqM2I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
          </span>
          <header className="major">
            <h1>Servicios</h1>
          </header>
        </div>
      </>
    );
  };

  return (
    <div id="wrapper">
      <Header />
      <section id="banner" className="style2">
          {
              (!!service) ? getServiceBanner() : getGenericBanner()
          }
      </section>
      <div id="main">{children}</div>
      <Contact />
      <Footer />
    </div>
  );
}
