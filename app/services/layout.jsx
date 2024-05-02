// "use client";
import Image from "next/image";
import Header from "../ui/header";
import { data } from "../lib/data";
import { Contact } from "../ui/contact";
import Footer from "../ui/footer";

import ServiceBanner from "../ui/services/banner";

export const metadata = {
  title: "Riesto Cero Uy - Servicios",
  description: "La seguridad que te respalda en cada paso",
};

export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <Header />
      {/* {!!service ? getServiceBanner(service) : getGenericBanner()} */}
      <ServiceBanner></ServiceBanner>
      <div id="main">{children}</div>
      <Contact />
      <Footer />
    </div>
  );
}
