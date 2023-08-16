import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '../components/header';
import Foot from '../components/header/nav/foot';

const mont = Montserrat({ subsets:['latin'], 
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
  title: 'Kelubia Urubusi',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={mont.className}>
        <Header />
        {children}
      </body>

        <Foot />
    </html>
  )
}
