// import styles from "./page.module.css";
import Head from "next/head";
import { Contact } from "./ui/contact";
import Footer from "./ui/footer";
import Header from "./ui/header";
import { Main } from "./ui/main";
import MainBanner from "./ui/main-banner";
import { Media } from "./ui/media";
import { Services } from "./ui/services";

export default function Home() {
  return (
    <div id="wrapper">

      <Header />
      <MainBanner />
      <Main></Main>
      <Media />
      <Services />
      <Contact/>
      <Footer />
    </div>
  );
}
