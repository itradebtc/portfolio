"use client"
import {TiSocialLinkedin, TiSocialInstagram, TiSocialTwitterCircular} from 'react-icons/ti'
import { FcBusinessman, FcIphone, FcFeedback } from 'react-icons/fc'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion, AnimatePresence } from "framer-motion";


export default function Page() {
  const form = useRef();

  const sendmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ufqtt1k","template_kkxroui",form.current,"2ZDAvawyHEIpQUoKT")
    .then(()=>{
      toast.success("message sent")
    },()=>{
      toast.error("something is wrong")
    })
    e.target.reset()
  
}

  return (
    <div className='bg-gradient-to-r from-[#abbaab] via-[#ffffff] to-[#abbaab] md:h-[100vh] p-7 md:p-20'>
      <AnimatePresence>
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exist={{ opacity: 0, y: 15 }}
            transition={{ delay: 1 }}
            className='pb-10'
            >
                <h1 className='text-3xl'>Get in touch with me</h1>
            </motion.div>
      </AnimatePresence>
      {/* form */}
      <div className='md:grid md:grid-cols-2 md:gap-44 w-auto'>
        <div className='md:row-span-2 md:w-[40vw] md:mx-7'>
                <form ref={form} onSubmit={sendmail} className='space-y-4 py-4 px-8'>
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col w-auto'
                        >
                          <label className='py-2'>Full Name <span className='text-red-900 text-sm'>*</span></label>
                          <input type="text" placeholder="Full Name"  name="name" className="border-l-4 border-l-green-700 border-2 px-3 outline-none h-[50px] rounded-md bg-blue-50" required />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col w-auto'
                        >
                          <label className='py-2'>Email <span className='text-red-900 text-sm'>*</span></label>
                          <input type="email" placeholder="Email" name="email"  className="border-l-4 border-l-green-700 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-blue-50" required />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col w-auto'
                        >
                          <label className='py-2'>Phone <span className='text-red-900 text-sm'>*</span></label>
                          <input type="tel" placeholder="Phone" name="phone" minLength={11} maxLength={11}  className="border-l-4 border-l-green-700 border-2 border-gray-25 px-3 outline-none h-[50px] rounded-md bg-blue-50" required />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col w-auto'
                        >
                          <label>Message <span className='text-red-900 text-sm'>*</span></label>
                          <textarea placeholder="Write a message" name="message" rows="4" cols="50" className="border-l-4 border-l-green-700 border-2 border-gray-25 px-3 py-1 outline-none h-[100px] rounded-md bg-blue-50" required ></textarea>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                      <motion.div
                      initial={{ opacity: 0, y: 500 }}
                      animate={{ opacity: 1, y: 0 }}
                      exist={{ opacity: 0, y: 0 }}
                      transition={{ delay: .4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                      >
                        <button className='bg-black text-white py-3 px-7 rounded-md rounded-br-[34px]'>Send Message</button>
                      </motion.div>
                    </AnimatePresence> 
                </form>
                <ToastContainer
                position='top-center'
                hideProgressBar={true}
                theme='dark' 
                autoClose={2000}/>
        </div>
        {/* contact details */}
        <div className='pt-7 text-lg space-y-4'>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col'
                        >
                          <div className='flex items-center space-x-4'>
                              <FcBusinessman size={50} className='text-blue-800'/>
                              <p>
                              Kelubia Urubusi
                              </p>
                          </div>
                        </motion.div>
                  </AnimatePresence>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .6, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col'
                        >
                          <div className='flex items-center'>
                              <a className='flex justify-center items-center gap-4' href={`tel:${'07086639336'}`}><FcIphone size={50} />07086639336</a>
                          </div>
                        </motion.div>
                  </AnimatePresence>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className='flex flex-col'
                        >
                          <div className='flex items-center'>
                              <a className='flex justify-center items-center gap-4' href={`mailto:${'kelubiaurubusi@gmail.com'}`}><FcFeedback size={50} />kelubiaurubusi@gmail.com</a>
                          </div>
                        </motion.div>
                  </AnimatePresence>
        </div>
        {/* social handle */}
        <div className='pt-4 text-lg'>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exist={{ opacity: 0, x: 0 }}
                        transition={{ delay: .8, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        >
                          <p>Follow me on Social Media!</p>
                        </motion.div>
                  </AnimatePresence>
            <section className='flex gap-7'> 
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exist={{ opacity: 0, y: 0 }}
                        transition={{ delay: .9, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        >
                          <a href="https://www.linkedin.com/in/kelubia-urubusi-91a483269/" target='_blank' rel='noreferrer' title='My LinkedIn Page'>
                            <TiSocialLinkedin size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
                          </a> 
                        </motion.div>
                  </AnimatePresence>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exist={{ opacity: 0, y: 0 }}
                        transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        >
                          <a href="https://www.instagram.com/zaddy___1/" target='_blank' rel='noreferrer' title='My Instagram Page'>
                            <TiSocialInstagram size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
                          </a>
                        </motion.div>
                  </AnimatePresence>
                  <AnimatePresence>
                        <motion.div
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exist={{ opacity: 0, y: 0 }}
                        transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        >
                          <a href="https://twitter.com/murubz" target='_blank' rel='noreferrer' title='My Twitter Page'> 
                            <TiSocialTwitterCircular size={50} className='hover:ease-in duration-300 hover:scale-110 hover:text-[hsl(207,13%,34%)]' />
                          </a>
                        </motion.div>
                  </AnimatePresence>
            </section>
        </div>

      </div>
    </div>
  )
}
