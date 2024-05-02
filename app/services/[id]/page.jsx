"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { data } from "../../lib/data";

export default function Page() {
  var { id } = useParams();
  var service = data.services.items.find((item) => item.id == id);
  return (
    <>
      <section id="two" className="spotlights">
        <section>
          <div  className="image">
            <span
              className="image-credit"
              dangerouslySetInnerHTML={{ __html: service.creditLink }}
            ></span>
            <Link href="generic.html">
              <Image
                src={service.imageDesktop}
                width={300}
                height={320}
                alt=""
              />
            </Link>
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>{service.title}</h3>
              </header>
              <p>{service.text}</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
