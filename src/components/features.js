import styles from "./features.module.css"

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>Completely free to host 💸</div>
      <div className={styles.feature}>Setup time &lt; 15 mins ⏱️</div>
      <div className={styles.feature}>Fast ⚡ and responsive 💦</div>
      <div className={styles.feature}>Highly customisable ⚒️</div>
    </div>
  )
}
