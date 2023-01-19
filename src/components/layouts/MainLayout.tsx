
import Head from "next/head";
import { NavbarComponent } from "../Navbar";
import styles from './MainLayout.module.css';

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarComponent></NavbarComponent>

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
