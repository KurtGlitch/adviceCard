import React, {useState} from "react";
import styles from "../../components/advicecard.module.css";
import Image from "next/image";


function AdviceCard({ data }) {
  
  const slip = data.slip

  const [quote , setQuote] = useState(slip)

  const fetchNewQuote = async()=>{
    const url = "https://api.adviceslip.com/advice"
    const res = await fetch(url)
    const data = await res.json()
    const slip = data.slip
    setQuote(slip)
  }


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Advice #{quote.id}</h1>
        <p className={styles["bodyText"]}>
          &ldquo;{quote.advice}&rdquo;
        </p>
        <div className={styles.deco}>
          <hr className={styles.hr1} />
          <div className={styles.beanA}></div>
          <div className={styles.beanB}></div>
          <hr className={styles.hr2} />
        </div>
        <div onClick={fetchNewQuote} className={styles.button}>
          <Image
            src="/images/icon-dice.svg"
            alt="random"
            height="24px"
            width="24px"
          />
        </div>
      </div>
    </div>
  );
}

export default AdviceCard;

export async function getServerSideProps() {
  const url = "https://api.adviceslip.com/advice"
  const res = await fetch(url)
  const data = await res.json()
  return { props: { data } }
}