import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'



const TransitionEffect = () => {


  return (
    <>

  
    
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light dark:bg-dark' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['100%', '100%']}}
    transition={{duration:0.4, ease:"easeOut"}}/>

    <motion.div className='fixed top-1/4 border-dark/75 dark:border-light/75 bottom-0 right-full w-screen z-30 bg-light dark:bg-dark border-t ' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:.05, duration:0.35, ease:"easeOut"}}/>

    <motion.div className='fixed top-2/4 bottom-0 border-t border-dark/75 dark:border-light/75 right-full w-screen z-30 bg-light dark:bg-dark ' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:.1, duration:0.3, ease:"easeOut"}}/>

    <motion.div className='fixed top-3/4 bottom-0 border-t border-dark/75 dark:border-light/75 right-full w-screen z-30 bg-light dark:bg-dark' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:.15, duration:0.25, ease:"easeOut"}}/>

    
    </>
  )
}

export default TransitionEffect
