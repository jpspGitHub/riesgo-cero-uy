import Image from "next/image";
import Link from "next/link";
import { data } from "../../lib/data";
import profilePic from "./../../../public/images/services/default-service.jpg";

export function Services() {
  return (
    <>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h2>Nuestros servicios</h2>
          </header>

          <div></div>
        </div>
      </section>
      <>
        <div id="main">
          <section id="three" className="cards click">
            {data.services.items.map((item, i) => (
              <article key={item.id} style={{
                backgroundImage: `url(${item.image})`,
              }}>
                <span className="image">
                  <Image src={profilePic} alt="" />
                </span>
                <header className="major">
                  <h3>
                    <Link href={`/services/${item.id}`} className="link">
                      {item.title}
                    </Link>
                  </h3>
                </header>
                <Link href={`/services/${item.id}`} class="link primary"/>
              </article>
            ))}
          </section>
        </div>
      </>
    </>
  );
}