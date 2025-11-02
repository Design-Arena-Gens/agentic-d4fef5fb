import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Chennai in Vector</h1>
        <p>
          A stylized SVG celebrating the coastal energy and urban rhythm of
          Tamil Nadu&apos;s capital.
        </p>
      </div>
      <div className={styles.canvas}>
        <Image
          src="/chennai.svg"
          alt="Stylized map illustration of Chennai"
          fill
          priority
        />
      </div>
    </main>
  );
}
