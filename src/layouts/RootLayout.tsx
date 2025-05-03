import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from "react";
import "@/assets/globals.scss";
import style from "./style.module.scss";
import OrganismsNavBar from "@/components/organisms/NavBar/Index";
import OrganismsSearchMenu from "@/components/organisms/SearchMenu/Index";
import OrganismsProfile from "@/components/organisms/Profile/Index";
import "@/assets/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header className={style.header}>
        <OrganismsSearchMenu showModal={() => setShowModal(true)} />
        <OrganismsProfile
          isShow={showModal}
          onSave={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        />
      </header>
      <main className={style.main}>
        <aside className={style.aside}>
          <OrganismsNavBar actionButton={() => setShowModal(true)} />
        </aside>
        <article className={style.article}>{children}</article>
      </main>
    </div>
  );
}
