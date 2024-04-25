import Image from "next/image";
import { data } from "../../lib/data";
export function Main() {
  return (
    <>
      <div id="main">
        <section id="one" className="tiles">
          {data.main.items.map((item, i) => (
            <article key={i}>
              <header className="major">
                <h3>
                  <span className="link">
                    {item.title}
                  </span>
                </h3>
                <p>{item.text}</p>
              </header>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
