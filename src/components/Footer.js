import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import {DotCon, GitSq, LinkSq, NewMail, } from './Icons'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className=' w-full border-t-2 border-solid border-dark font-medium text-xl mdlg:text-lg dark:text-light dark:border-light md:text-md sm:text-sm'>
      <Layout className='py-8 flex items-center justify-between xl:py-7 lg:py-5'>
        
        <div className='left-0 '>
          Built With <span className='text-heart'> &#9825;</span> by Harshith
        </div>

        <div>
          <span>&copy; {new Date().getFullYear()}  All Rights Reserved.</span>
        </div>
        
        <div >
          <nav className='flex flex-row gap-8'>
            
            
            <motion.a href="mailto:harshithkvanam@gmail.com" alt="Email" target="_blank" whileHover={{y:-5}}>
              <NewMail className="dark:fill-light"/>
              
            </motion.a>
      
            
            <motion.a href="https://github.com/hkv232"  alt="GitHub" target="_blank" whileHover={{y:-5}}>
              <GitSq className="dark:fill-light"/>
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/harshith-vanam/"  alt="LinkedIn" target="_blank" whileHover={{y:-5}}>
              <LinkSq className="dark:fill-light" />
            </motion.a>
          </nav>

        </div>
        
      </Layout>
    </footer>
  )
}

export default Footer
