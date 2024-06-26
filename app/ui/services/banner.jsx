"use client";
import { useParams } from "next/navigation";
import { data } from "./../../lib/data";
import defaultServiceImageDesktop from "./../../../public/images/services/default-service_desktop.webp";
import defaultServiceImageMobile from "./../../../public/images/services/default-service_mobile.webp";

export default function ServiceBanner() {
  var { id } = useParams();
  var service = data.services.items.find((item) => item.id == id);
  var getServiceBanner = (service) => {
    return (
      <>
        <section
          id="banner"
          className="style1"
          style={{
            backgroundImage: `url(${service.imageDesktop})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="inner">
            <span
              className="image-credit"
              dangerouslySetInnerHTML={{ __html: service.creditLink }}
            ></span>
            <header className="major">
              <h1>{service.title}</h1>
            </header>
          </div>
        </section>
      </>
    );
  };

  var getGenericBanner = () => {
    return (
      <>
        <section
          id="banner"
          className="style1"
          style={{
            backgroundImage: `url(${defaultServiceImageDesktop.src})`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="inner">
            <span className="image-credit">
              Foto de{" "}
              <a href="https://unsplash.com/es/@cytonn_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Cytonn Photography
              </a>{" "}
              en{" "}
              <a href="https://unsplash.com/es/fotos/dos-personas-dandose-la-mano-n95VMLxqM2I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </span>
            <header className="major">
              <h1>Servicios</h1>
            </header>
          </div>
        </section>
      </>
    );
  };
  return <>{!!service ? getServiceBanner(service) : getGenericBanner()}</>;
}
