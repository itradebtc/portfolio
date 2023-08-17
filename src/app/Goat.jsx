import React from 'react'
import './styleskk.css'
import Link from 'next/link'

export default function Goat() {
  return (
    <div className='p-16 md:p-12 grid place-items-center'>
        <Link href='/portfolio'>
            <button><span>View Portfolio</span></button>
        </Link>
    </div>
  )
}
