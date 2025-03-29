import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/globals.scss";
import style from "./style.module.scss";
import OrganismsNavBar from "@/components/organisms/NavBar/Index";
import OrganismsSearchMenu from "@/components/organisms/SearchMenu/Index";

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
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <header className={style.header}>
        <OrganismsSearchMenu />
      </header>
      <main className={style.main}>
        <aside className={style.aside}>
          <OrganismsNavBar />
        </aside>
        <article className={style.article}>{children}</article>
      </main>
    </div>
  );
}
