"use client"
import Image from 'next/image'
import pic from '../images/keke.png'
import Goat from '../Goat'
import { SlLocationPin } from 'react-icons/sl'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion, AnimatePresence } from "framer-motion";

export default function page() {
  return (
    <main className="bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] py-5 px-6 md:px-36 md:py-7">
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
            transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <h1 className="py-5 md:py-16 text-[24px] md:text-[35px] uppercase md:text-left">
                  i am Kelubia Urubusi - a passionate frontend web developer with
                  experience in html, css, javascript and react.
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
        {/* <Image 
            src={pic} 
            alt='my-picture' 
            className='w-full md:w-[20vw] md:h-[30%] rounded-full'
        />    */}
       </div>
       {/* my achievement */}
       <div className='p-12 md:p-7'>
          <div className='grid grid-cols-[200px,200px] grid-rows-[100px, 100px] pt-6 gap-8 md:flex md:justify-around items-center md:py-16 md:px-12 md:text-xl'>
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    html
                    <SiHtml5 size={100} />
                    </p>
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    css
                    <SiCss3 size={100} />
                    </p>
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    javascript
                    <SiJavascript size={100} />
                    </p>
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .6, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    tailwind
                    <SiTailwindcss size={100} />
                    </p>
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    react
                    <SiReact size={100} />
                    </p>
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .8, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase md:text-center md:flex md:flex-col'>
                    next.js
                    <TbBrandNextjs size={100} />
                    </p>
                </motion.div>
              </AnimatePresence> 
          </div>
       </div>
       <div>
        <Goat />
       </div>
    </main>
  )
}
