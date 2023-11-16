import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import profilepic from "../../public/images/profile/developer-pic-2.jpg"
import {useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'



const StatsLG = () => {

  return (

  <div className='lg:w-full col-span-2 flex flex-row justify-between items-center'>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={50}/>+
      </span>

      <h2 className='xl-text-center md:text-lg sm:text-md text-xl font-medium captalize text-dark/75 text-end dark:text-light/75'>
        satisfied clients
      </h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={40}/>+
      </span>

      <h2 className='text-lg font-medium captalize text-dark/75 text-end dark:text-light/75'>
        projects completed
      </h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={4}/>+
      </span>

      <h2 className='text-lg font-medium captalize text-dark/75 text-end  dark:text-light/75'>
        years of experience
      </h2>
    </div>
  </div>

  )
}


const StatsBox = () => {

  return (

  <div className='w-full flex flex-row justify-between items-center'>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={50}/>+
      </span>

      <h2 className='text-end text-xl font-medium captalize text-dark/75 dark:text-light/75'>
        satisfied clients
      </h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={40}/>+
      </span>

      <h2 className='text-lg font-medium captalize text-dark/75 text-end dark:text-light/75'>
        projects completed
      </h2>
    </div>

    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl md:text-6xl font-bold '>
        <AnimatedNumbers value={4}/>+
      </span>

      <h2 className='text-lg font-medium captalize text-dark/75 text-end  dark:text-light/75'>
        years of experience
      </h2>
    </div>
  </div>

  )
}


const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        {/* gives good SEO for portfolio */}
        <title>About | Harshith Vanam</title>
        <meta name='description' content='any description' />

      </Head>

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!"  className='mb-16 text-7xl lg:text-6xl md:text-5xl sm:mb-8'/>
          <div className='grid w-full grid-cols-8 gap-8 sm:gap-4 mb-16 md:inline-block'>
            <div className='col-span-5 flex flex-col items-start justify-start lg:col-span-4 '>
              <div className='row-span-2 flex-col flex'>
                <div className='mb-32 xl:mb-16'>

                <h2 className='dark:text-light/75 mb-4 text-2xl font-bold uppercase textdark/75 '>Biography</h2>
            

                <p className='font-medium text-lg'>
                  Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
                </p>
                <p className='my-4 font-medium text-lg'>
                  I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.

                </p>

                <p className='font-medium text-lg'>
                  Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>

                </div>

                <div className='lg:hidden px-10'>
                  <StatsBox />
                </div>

                
                
              </div>
              
              
            </div>


            <div className='w-5/6 col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light lg:col-span-4 -right-20 md:-right-12'>
              <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-3xl bg-dark dark:bg-light' />
              <Image src={profilepic} alt='harshith-picture' className='h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'/>
            </div>

            
            
          </div>

          <div className='hidden lg:flex'>
            <StatsLG />
          </div>
         
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
