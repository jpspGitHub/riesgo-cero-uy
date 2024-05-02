import { Inter } from "next/font/google";
import "./assets/scss/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riesto Cero Uy",
  description: "La seguridad que te respalda en cada paso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
