import { data } from "../../lib/data";

export function Contact() {
  return (
    <>
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Enviar mensaje"
                    className="primary"
                  />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">{data.contact.email}</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone"></span>
                <h3>Teléfono</h3>
                <span>{data.contact.phone}</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home"></span>
                <h3>Dirección</h3>
                <span>
                  {data.contact.address1}
                  <br />
                  {data.contact.address2}
                  <br />
                  Uruguay
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
