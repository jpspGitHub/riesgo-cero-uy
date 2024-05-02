import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
              <Link href="#" className="icon brands alt fa-facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link href="#" className="icon brands alt fa-twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li> */}
            <li>
              <Link
                href="https://wa.me/59891511615?text= Hola, Quiero Informacion/Asesoramiento"
                className="icon brands alt fa-instagram"
                aria-label="Ir a whatsapp"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/riesgocerouy"
                className="icon brands alt fa-instagram"
                aria-label="Ir a instragram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/riesgo-cerouy-0054052b2/"
                aria-label="Ir a linkedin"
                className="icon brands alt fa-linkedin-in"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Riesto Cero Uy</li>
            <li>
              Developer by: <Link href="mailto=pablo.silva@alchemistssoftworks.com"
                aria-label="Enviar mail a Alchemists Softworks"
                >Alchemists Softworks</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
