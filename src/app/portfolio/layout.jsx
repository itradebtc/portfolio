import React from 'react'

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