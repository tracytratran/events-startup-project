import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Welcome to the HackYourFuture Event!</h1>
      <img
        src="/images/hyf-team34-aar.jpeg"
        alt="Group photo of HackYourFuture team 34 Aarhus"
        className={styles.imgage}
      />
    </div>
  );
}
