import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/next.svg"
        width={180}
        height={120}
        alt="nextjs logo"
      />
      <div>
        <Link href='/blog'>All Blogs</Link>
      </div>
      <div>
        <Link href='/contact'>Contact</Link>
      </div>
    </main>
  )
}
