import {Exo, Roboto } from "next/font/google";
import "./styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const exoRegular = Exo({
  variable: "--font-exo-regular",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DocLab - Doctor's Room",
  description:
    "DocLab is a cutting-edge platform designed to revolutionize the healthcare industry by providing doctors with a virtual space to collaborate, share knowledge, and enhance patient care. With DocLab, medical professionals can connect with colleagues, access a wealth of medical resources, and stay updated on the latest advancements in medicine. Whether you're a seasoned practitioner or a medical student, DocLab offers a dynamic environment for learning, networking, and improving healthcare outcomes.",
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${exoRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
