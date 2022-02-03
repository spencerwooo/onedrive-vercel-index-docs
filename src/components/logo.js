import Image from 'next/image'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <>
      <Image src="/icons/64.png" alt="onedrive-vercel-index" width="36" height="36" />
      <div className={styles.logo}>
        <span className={styles.logo__title}>onedrive-vercel-index</span>
        <span className={styles.logo__subtitle}>indexing your onedrive since 2020</span>
      </div>
    </>
  )
}
