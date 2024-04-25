import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header id="header">
        <ul className="links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/services">Servicios</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </header>
    </>
  );
}
