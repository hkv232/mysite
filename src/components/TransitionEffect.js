import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'



const TransitionEffect = () => {


  return (
    <>

    <motion.div className='fixed top-0  bottom-0 right-full w-screen h-screen z-10 bg-light dark:bg-dark'
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"100%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{duration:2, ease:"easeInOut"}}/>

    <motion.div className='fixed top-0  right-full w-screen h-1/4 z-30 bg-primary'
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"100%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{duration:2, ease:"easeInOut"}}/>
    
    <motion.div className='fixed top-[100px]  right-full w-screen h-1/4 z-31 bg-light' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:0.2, duration:1.8, ease:"easeInOut"}}/>

    <motion.div className='fixed top-[200px] right-full w-screen h-1/4 z-32 bg-primaryDark' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"100%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:0.2, duration:1.6, ease:"easeInOut"}}/>
    
    <motion.div className='fixed top-[300px] right-full w-screen h-1/4 z-33 bg-blue' 
    
    initial={{x:"100%", width:"100%"}}
    animate={{x:"0%", width:"0%"}}
    exit={{x:['0%', '100%'], width:['0%', '100%']}}
    transition={{delay:0.2, duration:1.1, ease:"easeInOut"}}/>
    
    
    </>
  )
}

export default TransitionEffect
