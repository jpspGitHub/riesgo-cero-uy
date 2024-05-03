import Link from "next/link";
import HeaderImage from "./header-image";

export default function Header() {
  return (
    <>
      <header id="header">
        <HeaderImage></HeaderImage>

        <ul className="links">
          <li>
            <Link href="/" aria-label="Ir a inicio">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/services" aria-label="Ir a servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Ir a contactos">
              Contacto
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
