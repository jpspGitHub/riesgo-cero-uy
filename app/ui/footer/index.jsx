import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            {/* <li>
              <a href="#" className="icon brands alt fa-facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li> */}
            <li>
              <a
                href="https://wa.me/59891511615?text= Hola, Quiero Informacion/Asesoramiento"
                className="icon brands alt fa-instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/riesgocerouy"
                className="icon brands alt fa-instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/riesgo-cerouy-0054052b2/"
                className="icon brands alt fa-linkedin-in"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Riesto Cero Uy</li>
            <li>
              Developer by: <a href="#">Alchimists Softworks</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
