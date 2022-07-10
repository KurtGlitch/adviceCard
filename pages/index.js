import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Get Advice App</title>
        <meta name="description" content="Get Advice App" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Link href="/advice">
        <a className={styles['anchor']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ClICK FOR ADVICE
        </a>
      </Link>
    </div>
  );
}
