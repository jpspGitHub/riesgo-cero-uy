import bannerDesktop from "./../../../public/images/banner_desktop.png";
import favicon from "./../../../public/images/logo.png";
import Image from "next/image";

export default function MainBanner() {
  return (
    <section
      id="banner"
      className="major"
      style={{
        backgroundImage: `url(${bannerDesktop.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="inner">
        <header className="major logo">
          <h1>RiesgoCeroUy</h1>
          <Image src={favicon} width={100} height={100} alt="Riesgo Cero Uy Logo"  className="logo"/> 
        </header>
        <div className="content">
          <p>La seguridad que te respalda en cada paso</p>
        </div>
      </div>
    </section>
  );
}
