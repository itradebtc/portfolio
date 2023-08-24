"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { FaGithub, FaShareSquare } from 'react-icons/fa'
import Link from 'next/link'
import { scale } from '@/src/components/header/anim'

const job = [
  {
      id: 1,
      name: 'dental',
      title: 'Dental App',
      madeWith: 'Next.Js',
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Dental%20App.png?raw=true',
      github: 'https://github.com/itradebtc/Capstone-Project',
      site: 'https://medicalappcapstone.vercel.app/',
  },
  {
      id: 2,
      name: 'portfo',
      title: 'First Portfolio',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/First%20Portfolio.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/firstportfolio.html',
      site: 'https://itradebtc.github.io/random/src/firstportfolio.html',
  },
  {
      id: 3,
      name: 'timeTracker',
      title: 'Time Tracker Template',
      madeWith: ['Html,Css'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Time%20Tracker.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/timer.html',
      site: 'https://itradebtc.github.io/random/src/timer.html',
  },
  {
      id: 4,
      name: 'password',
      title: 'Password Generator',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Password%20Generator.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/passwordgenerator.html',
      site: 'https://itradebtc.github.io/random/src/passwordgenerator.html',
  },
  {
      id: 5,
      name: 'countDown',
      title: 'Birthday Count Down',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Birthday%20Countdown.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/birthdaycountdown.html',
      site: 'https://itradebtc.github.io/random/src/birthdaycountdown.html',
  },
  {
      id: 6,
      name: 'cloak',
      title: 'Digital Cloak',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Digital%20Cloak.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/cloak2.html',
      site: 'https://itradebtc.github.io/random/src/cloak2.html',
  },
  {
      id: 7,
      name: 'bmi',
      title: 'Bmi Calculator',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Screenshot%202023-08-22%20at%204.26.47%20PM.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/bmicalculator.html',
      site: 'https://itradebtc.github.io/random/src/bmicalculator.html',
  },
  
]

const myjob = job.map(work =>(
  <section key={work.id} className='p-4 shadow-2xl bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent hover:shadow-2xl'>
      <h1 className='text-xl py-3'>{work.title}</h1>
      <Link href={`/portfolio/${work.name}`}>
        <Image src={work.image} width={500} height={500} alt='Picture of Work'/>
      </Link>
      <div className='flex justify-between items-center py-3'>
        <h2>
          <p className='uppercase'>Created with {work.madeWith}</p>
        </h2>
        <p className='flex justify-between items-center gap-2'>
          <a href={work.github} target='_blank' title='View Code' className='text-[12px]' >
            Github Code
            <FaGithub size={25} className='text-green-800 hover:scale-105'/>
          </a>
          <a href={work.site} target='_blank' title='View Site' className='text-[12px]' >
            Live Demo
            <FaShareSquare size={25} className='text-green-800 hover:scale-105' />
          </a>
        </p>
      </div>
  </section>
))

export default function page(){
  return (
    <main className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] w-auto h-[480vh] md:h-[240vh] p-7 md:p-14'>
      <div>
            <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                  <h1 className='text-5xl bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:pb-7'>
                    Projects
                  </h1>
                </motion.div>
              </AnimatePresence>
            <div className='flex flex-col md:gap-4 w-auto font-bold m-2 md:m-0'>
              <div>
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                exist={{ opacity: 0, x: 0 }}
                transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                <h2 className='flex gap-3 text-lg md:text-2xl bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent'>I have good knowledge of  
                  <span className='bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent uppercase'>
                    <Typewriter 
                    options={{
                    strings: [
                      "html",
                      "css",
                      "javascript",
                      "tailwind",
                      "react",
                      "next js"
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                    }}
                    />
                  </span>
                </h2>
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
        <div className='w-auto p-4 md:p-7'>
          <div className='grid grid-cols-[100px,100px,100px] grid-rows-[100px,100px] w-auto pt-3 md:gap-8 md:flex md:items-center md:text-center md:py-5 md:px-12 md:text-xl md:font-black'>
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    html
                    </p>
                    <SiHtml5 size={50} className='text-green-800' />
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    css
                    </p>
                    <SiCss3 size={50} className='text-green-800' />
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    js
                    </p>
                    <SiJavascript size={50} className='text-green-800' />
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .6, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    tailwind
                    </p>
                    <SiTailwindcss size={50} className='text-green-800 items-center' />
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    react
                    </p>
                    <SiReact size={50} className='text-green-800' />
                </motion.div>
              </AnimatePresence>    
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .8, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <p className='uppercase bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent md:flex md:flex-col text-center'>
                    next.js
                    </p>
                    <TbBrandNextjs size={50} className='text-green-800' />
                </motion.div>
              </AnimatePresence> 
          </div>
        </div>
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                  <p className='text-2xl bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent pb-7'>
                    I like building things. Here are few things I&#39;ve built thus far. Most, if not all of them, were built with Next Js and are responsive on mobile.
                  </p>
                </motion.div>
              </AnimatePresence>
          <div className='bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent'>
          <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                   <div className='grid md:grid-cols-3 md:gap-4 absolute bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent hover:shadow-2xl'>
                     {myjob}
                   </div>
                </motion.div>
              </AnimatePresence>
          </div>
       </div> 
    </main>
  )
}
