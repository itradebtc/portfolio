import React from 'react'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets:['latin'], 
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
    title: 'Portfolio',
    description: 'Portfolio of my work',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}