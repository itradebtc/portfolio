"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion, AnimatePresence } from "framer-motion";

export default function page(){
  return (
    <main className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] md:h-[100vh] pt-28'>
      {/* <div className='py-4 px-7'>
        <button className='border border-black py-2 px-4'><a href='../public/mycv.pdf' download="mycv.pdf">Download CV</a></button>
      </div> */}
        <div className='flex flex-col md:gap-5 text-center justify-center items-center w-auto md:justify-center md:text-center font-bold m-2 md:m-0'>
            <h1 className='uppercase text-2xl md:text-7xl'>coming soon</h1>
            <h2>I&#39;m</h2>
            <h3 className='uppercase text-lg md:text-4xl text-green-800'>
            <Typewriter 
                 options={{
                    strings: [
                      "Web developer",
                      "Android developer",
                      "Native React Developer",
                      "React Js Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                  }}
            />
            </h3>
        </div>
        <div className='p-4 md:p-7'>
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
    </main>
  )
}
