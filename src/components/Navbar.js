import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from './Icons'
import {motion} from 'framer-motion'

const NavLink = ({href, title, className = ""}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      {/* underline element for links */}
      <span className={`
      
      h-[1px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300
      
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-light
      
      `}>&nbsp;</span>
    
    </Link>
  )
}

const HamLink = ({href, title, className = "", toggle}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group`} onClick={handleClick}>
      {title}

      {/* underline element for links */}
      <span className={`
      
      h-[1px] inline-block bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300
      
      ${router.asPath === href ? 'w-full' : 'w-0'}
      dark:bg-dark
      
      `}>&nbsp;</span>
    
    </button>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <header className='w-full pl-20 pr-12 py-8 font-medium flex items-center justify-between dark:text-light ' >

      

      <div className='left-0 top-2 translate-x-[-50%]'>
        <Logo />
      </div>


      {
          isOpen ? 

          <motion.div initial={{scale:0, opacity: 0, x:"70%", y:"-50%"}} animate={{scale:1, opacity: 1}} className='min-w-[40vw] left-0 flex flex-col z-3
          
          
          
          bg-dark/90 dark:text-dark dark:bg-light/70 rounded-lg backdrop-blur-md 
          py-32 text-light text-lg'> 
          <nav className='flex flex-col justify-center items-center gap-6'>

            <HamLink href="/" title="Home" className='' toggle={handleClick}/>
            <HamLink href="/about" title="About" className='' toggle={handleClick}/>
            <HamLink href="/projects" title="Projects" className='' toggle={handleClick}/>
            <HamLink href="/articles" title="Articles" className='' toggle={handleClick}/>
          
            </nav>
          </motion.div>

          : null

        }
      
      <div className='flex justify-between'> 
        

        <nav className=' mdlg:hidden text-lg'>

          <NavLink href="/" title="Home" className='mr-4 top-1'/>
          <NavLink href="/about" title="About" className='mx-4 top-1'/>
          <NavLink href="/projects" title="Projects" className='mx-4 top-1'/>
          <NavLink href="/articles" title="Articles" className='mx-4 top-1'/>
          <NavLink href="/blanko" title="Blank" className='mx-4 top-1'/>
        
        </nav>


        {/* ham menu */}

        <button className='hidden mdlg:flex flex-col justify-center items-center py-1' onClick={handleClick}>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[1px] w-8 rounded-sm border border-solid border-dark dark:border-light -translate-y-1 ${isOpen ? 'rotate-45 translate-y-[0.5px]' : '-translate-y-1'}`}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-100 ease-out h-[1px] w-8 rounded-sm my-0.5 border dark:border-light border-solid border-dark ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[1px] w-8 rounded-sm translate-y-1 border dark:border-light border-solid border-dark ${isOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
      </button>

        <button className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? "bg-dark text-light" : 'bg-light text-dark'}`} onClick={() => setMode(mode === "light" ? "dark" : 'light')}>
          {
            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={'fill-light'} />
          }

        </button>


      </div>

      

      
    </header>
  )
}

export default Navbar
