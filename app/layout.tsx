import { PropsWithChildren } from "react";
import { Nunito } from "next/font/google";

import "./globals.css";

import {
  ClientOnly,
  RegisterModal,
  LoginModal,
  RentModal,
  Navbar,
} from "@/app/components";
import { ToasterProvider } from "@/app/providers";
import getCurrentUer from "@/app/actions/get-current-user";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }: PropsWithChildren) {
  const currentUser = await getCurrentUer();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
