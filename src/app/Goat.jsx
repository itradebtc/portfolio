import React from 'react'
import './styleskk.css'
import Link from 'next/link'

export default function Goat() {
  return (
    <div className='p-12 md:p-28 md:grid place-items-center'>
        <Link href='/portfolio'>
            <button><span>View Portfolio</span></button>
        </Link>
    </div>
  )
}
