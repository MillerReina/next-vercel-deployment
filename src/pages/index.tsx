import { Inter } from "@next/font/google";
import MainLayout from "../components/layouts/MainLayout";
import styles from '../components/layouts/MainLayout.module.css';


const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1 className={styles.title}>Pagina de inicio</h1>        
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "} Meee             
            </a>                        
          </div>          
        </div>        
      </MainLayout>
    </>
  );
}
