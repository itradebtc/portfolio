"use client"
import Image from 'next/image'
import logo from './images/kelubia.svg'
import styles from './page.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] md:h-[100vh]'>
        <div className='p-8'>
        <Image src={logo} width={125} height={100} alt='Logo' />
        </div>
        <div className='mx-auto pt-28 md:m-12 md:p-32'>
      <Link href='/about'>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <h2 className={styles.text}>Kelubia</h2>
            
            </motion.div>
        </AnimatePresence>
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            // initial={{ opacity: 0, x: -500 }}
            // animate={{ opacity: 1, x: 0 }}
            // exist={{ opacity: 0, x: 0 }}
            // transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <h2 className={styles.text}>Urubusi</h2>
            </motion.div>
        </AnimatePresence>
      </Link>
      </div>
    </main>
  )
}
