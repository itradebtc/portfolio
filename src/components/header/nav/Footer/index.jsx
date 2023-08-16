import styles from './style.module.scss';
import {TiSocialLinkedin, TiSocialInstagram, TiSocialTwitterCircular} from 'react-icons/ti'


export default function index() {
  return (
    <div>
      <div className={`${styles.footer} pt-4`}>
        <a href="https://www.linkedin.com/in/kelubia-urubusi-91a483269/" target='_blank' rel='noreferrer' title='My LinkedIn Page'>
          <TiSocialLinkedin size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
        </a> 
        <a href="https://www.instagram.com/zaddy___1/" target='_blank' rel='noreferrer' title='My Instagram Page'>
          <TiSocialInstagram size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
        </a>
        <a href="https://twitter.com/murubz" target='_blank' rel='noreferrer' title='My Twitter Page'> 
          <TiSocialTwitterCircular size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
        </a>
      </div>
    </div>
  )
}
