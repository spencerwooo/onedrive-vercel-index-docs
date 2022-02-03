import { useState } from 'react'
import CryptoJS from 'crypto-js'

import styles from './encryption.module.css'

// This function is identical to the implementation in onedrive-vercel-index
// https://github.com/spencerwooo/onedrive-vercel-index/blob/d8ef0733bfe4d4c9c3e7b71be573d08d1ab88060/utils/oAuthHandler.ts#L6-L13
const obfuscateToken = token => {
  const AES_SECRET_KEY = 'onedrive-vercel-index'
  const encrypted = CryptoJS.AES.encrypt(token, AES_SECRET_KEY)
  return encrypted.toString()
}

export default function Encryption() {
  // An example client secret: `5e07Q~ZCBgtR3MdPUpQcqa~N8pOZo11GJ1MhL`
  const [token, setToken] = useState('')
  const obfuscatedToken = token && obfuscateToken(token)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Obfuscate your client secret 👇</div>
      <div className={styles.label}>Your client secret:</div>
      <input
        className={styles.input}
        onChange={e => setToken(e.target.value)}
        placeholder="5e07Q~..."
      />
      <div className={styles.label}>Your obfuscated client secret:</div>
      <input
        style={{ opacity: 0.8, cursor: "not-allowed" }}
        className={styles.input}
        value={obfuscatedToken}
        onClick={e => e.target.select()}
        readOnly
      />
    </div>
  )
}
