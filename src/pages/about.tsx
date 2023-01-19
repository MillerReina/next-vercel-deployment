import { Inter } from "@next/font/google";
import styles from "../components/layouts/MainLayout.module.css";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>Pagina de acerca de nosotros</h1>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Meee
          </a>
        </div>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
