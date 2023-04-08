import { PropsWithChildren } from "react";
import { Nunito } from "next/font/google";

import "./globals.css";

import { ClientOnly, RegisterModal, Navbar } from "@/app/components";
import { ToasterProvider } from "@/app/providers";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
