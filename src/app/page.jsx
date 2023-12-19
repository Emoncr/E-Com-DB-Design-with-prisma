import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <h2>Hello World!</h2>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>





    </main>
  )
}
