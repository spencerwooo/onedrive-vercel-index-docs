import { useRouter } from 'next/router'
import styles from './features.module.css'

const featureTranslations = {
  en: {
    'free-to-host': 'Completely free to host 💸',
    'setup-time': 'Setup time < 15 mins ⏱',
    'fast-n-responsive': 'Fast ⚡ and responsive 💦',
    'highly-customisable': 'Highly customisable ⚒',
  },
  zh: {
    'free-to-host': '部署全程免费 💸',
    'setup-time': '配置时间 < 15 分钟 ⏱',
    'fast-n-responsive': '极快 ⚡ 且支持响应式布局 💦',
    'highly-customisable': '高度定制化 ⚒',
  },
}

export default function Features() {
  const { locale, defaultLocale } = useRouter()

  return (
    <div className={styles.features}>
      {['free-to-host', 'setup-time', 'fast-n-responsive', 'highly-customisable'].map(feature => (
        <div key={feature} className={styles.feature}>
          {featureTranslations[locale][feature] ?? featureTranslations[defaultLocale][feature]}
        </div>
      ))}
    </div>
  )
}
