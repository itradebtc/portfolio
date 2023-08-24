"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { FaGithub, FaShareSquare } from 'react-icons/fa'
import { TiArrowBack } from 'react-icons/ti'
import Link from 'next/link';

const job = [
  {
      id: 1,
      name: 'countDown',
      title: 'Birthday Count Down',
      madeWith: ['Html, Css, Javascript'],
      image: 'https://github.com/itradebtc/doctorsimages/blob/main/Birthday%20Countdown.png?raw=true',
      github: 'https://github.com/itradebtc/random/blob/main/src/birthdaycountdown.html',
      site: 'https://itradebtc.github.io/random/src/birthdaycountdown.html',
  },
]

const myjob = job.map(work =>(
  <section key={work.id} className='p-4 shadow-2xl bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent hover:shadow-2xl'>
      <h1 className='text-3xl py-3'>{work.title}</h1>
      <Image src={work.image} width={1131} height={400} alt='Picture of Work'/>
      <div className='flex justify-between items-center py-3'>
        <h2>
          <p className='uppercase text-xl'>Created with {work.madeWith}</p>
        </h2>
        <p className='flex justify-center items-center gap-4'>
          <a href={work.github} target='_blank' title='View Code'>
            Github Code
            <FaGithub size={40} className='text-green-800 hover:scale-105'/>
          </a>
          <a href={work.site} target='_blank' title='View Site'>
            Live Demo
            <FaShareSquare size={40} className='text-green-800 hover:scale-105 items-center' />
          </a>
        </p>
      </div>
  </section>
))

export default function page(){
  return (
    <main className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] w-auto h-[100dvh] md:h-[140vh] p-7 md:p-14'>
          <div className='pb-3 text-green-800'>
            <Link href='/portfolio'>
              <TiArrowBack size={50} />
            </Link>
          </div>
          <div className='bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent'>
              <AnimatePresence>
                <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                exist={{ opacity: 0, y: 0 }}
                transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                   <div className='w-auto h-auto bg-gradient-to-bl from-neutral-600 via-rose-600 to-indigo-500 bg-clip-text text-transparent hover:shadow-2xl'>
                     {myjob}
                   </div>
                </motion.div>
              </AnimatePresence>
          </div>
    </main>
  )
}
