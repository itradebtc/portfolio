"use client"
import Goat from '../Goat'
import { SlLocationPin } from 'react-icons/sl'
import { motion, AnimatePresence } from "framer-motion";

export default function page() {
  return (
    <main className="bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] h-[100dvh] py-5 px-6 md:px-36 md:py-7">
      {/* my brief bio */}
      <div className='flex space-x-2 text-[hsl(207,13%,34%)] pt-24 md:pt-12'>
        <SlLocationPin size={20} /> <p>Lagos, Nigeria</p>
      </div>
      <div className="md:flex md:justify-around md:space-x-16">
      <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exist={{ opacity: 0, x: 0 }}
            transition={{ delay: .8, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <h1 className="py-5 md:py-16 text-[24px] md:text-[35px] uppercase md:text-left">
                  i am Kelubia Urubusi - a passionate frontend web developer with
                  experience in html, css, javascript react and next js.
                </h1>
            </motion.div>
        </AnimatePresence>
      <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exist={{ opacity: 0, x: 0 }}
            transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <p className="text-[hsl(207,13%,34%)] text-[16px] md:pt-[145px] md:text-right">
                  Welcome to my professional portfolio. I love working on 
                  projects of any kind and I&#39;m open to freelance work! Check
                  my work and feel free to contact me.
                </p>
            </motion.div>
        </AnimatePresence>
       </div>
       <div>
            <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .8, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                  <Goat />
                </motion.div>
            </AnimatePresence>
       </div>
    </main>
  )
}
