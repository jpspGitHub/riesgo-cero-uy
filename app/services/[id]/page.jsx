"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { data } from "../../lib/data";

export default function Page() {
  var { id } = useParams();
  var service = data.services.items.find((item) => item.id == id);
  return (
    <>
      <section id="two" class="spotlights">
        <section>
          <a href="generic.html" class="image">
            <Image src={service.image} width={300} height={320} alt="" />
          </a>
          <div class="content">
            <div class="inner">
              <header class="major">
                <h3>{service.title}</h3>
              </header>
              <p>
                {service.text}
              </p>
              
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
