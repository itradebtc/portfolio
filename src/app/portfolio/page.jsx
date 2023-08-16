"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function page(){
  return (
    <main className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] h-[100dvh] pt-28'>
      {/* <div className='py-4 px-7'>
        <button className='border border-black py-2 px-4'><a href='../public/mycv.pdf' download="mycv.pdf">Download CV</a></button>
      </div> */}
        <div className='flex flex-col gap-5 md:justify-center md:text-center font-bold m-36'>
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
    </main>
  )
}
