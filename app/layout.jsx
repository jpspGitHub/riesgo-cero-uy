import { Inter } from "next/font/google";
import "./assets/scss/main.scss";
// import "./assets/css/main.css";
// import { config } from '@fontawesome/fontawesome-svg-core'
//import '@fontawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riesto Cero Uy",
  description: "La seguridad que te respalda en cada paso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
