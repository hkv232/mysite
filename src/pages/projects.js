import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GitSq } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import Carousel from '@/components/Carousel'


const FramerImage = motion(Image);



const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='relative flex rounded-br-3xl rounded-2xl border-solid border-8 bg-light shadow-2xl items-center p-10 dark:bg-dark border-primary
        
        mdlg:flex-col

        mdlg:p-8
        
        '>

        <div className='absolute -z-10 rounded-br-3xl mdlg:h-[102%]'  />

            <div className='w-1/2 mdlg:w-full border-primary'>
            <Link href={link} target="_self" className='cursor-pointer overflow-hidden rounded-xl  '>
                {/* <Image src={img} alt={title} className='w-full h-auto' /> */}
                <FramerImage src={img} alt={title} className='rounded-2xl w-full h-auto ' whileHover={{scale:1.03}} transition={{duration:0.2}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>
            </div>

            <div className='w-1/2 flex flex-col items-start justify-between pl-12 mdlg:pl-0 mdlg:w-full mdlg:pt-8 '>
                <span className='text-primary font-medium text-xl'>
                    {type}
                </span>
                <Link href={link} target="_self" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                
                </Link>
                <p className='dark:text-light my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_self' className='-mt-2 rounded-lg bg-dark text-light p-2 px-10 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    '> View Project </Link>
                </div>
                
            </div>

        </article>

    )
}

const MajorProject = ({title, info, img, link, github}) => {
    return (
        <article className='w-full flex flex-col justify-center rounded-2xl border-4 border-solid border-dark bg-light shadow-2xl items-center p-6 relative dark:bg-dark dark:border-light

        '>

        <div className='absolute -z-10 rounded-3xl rounded-br-3xl bg-dark dark:bg-light dark:border-light' />

            <div>

            <Link href={link} target="_self" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='rounded-2xl w-full h-auto' whileHover={{scale:1.03}} transition={{duration:0.2}} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'/>
                
            </Link>
            </div>

            <div className='w-full grid grid-cols-3 items-start justify-between mt-4'>
                
                <div className='col-span-2'>
                    <Link href={link} target="_self" className='hover:underline underline-offset-2'>
                        <h2 className='dark:text-light my-2 w-full text-left text-2xl font-bold '>{title}</h2>
                    
                    </Link>

                

                    
                    <span className=' dark:text-light/75 text-dark font-medium text-lg mb-4'>
                        {info}
                    </span>

                </div>

                <div className='col-span-1 mt-2 flex items-right'>
                    <Link href={link} target='_self' className='-mt-2 rounded-lg bg-dark text-light p-2 px-6 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'> View Project </Link>
                </div>

                
            </div>

        </article>
    )
}

const MiniProject = ({title, info, img, link, github}) => {
    return (
        <article className='w-full flex flex-col justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl items-center p-6 relative dark:bg-dark dark:border-light '>


        <div className='absolute top-0 -right-3 -z-10 w-[104%] h-[103%] rounded-3xl rounded-br-3xl bg-dark dark:bg-light dark:border-light' />            

            <Link href={link} target="_self" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.03}} transition={{duration:0.2}} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'/>
                
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                
                <Link href={link} target="_self" className='hover:underline underline-offset-2'>
                    <h2 className='dark:text-light my-2 w-full text-left text-xl font-bold'>{title}</h2>
                
                </Link>

                <span className='dark:text-light/75 text-dark font-medium text-md mb-4'>
                    {info}
                </span>

                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_self' className='-mt-2 rounded-lg bg-dark text-light p-2 px-6 text-md border border-solid border-transparent font-semibold hover:bg-light hover:text-dark hover:border-dark
                    
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'> View Project </Link>
                </div>
                
            </div>

        </article>
    )
}

const projects = () => {
  return (
    <>
    
        <Head>
            {/* gives good SEO for portfolio */}
            <title>Projects | Harshith Vanam</title>
            <meta name='description' content='any description' />

        </Head>

        {/* <TransitionEffect /> */}

        <main className='w-full mb-16 flex flex-col items-center justify-center z-0'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16 text-7xl lg:text-6xl md:text-5xl' text="Imagination Trumps Knowledge!"/>


                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 '>
                    <div className='col-span-12 mb-32'>
                        <FeaturedProject
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/one"
                        type="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                        <span className={`bg-dark/75 dark:bg-light/75 block transition-all duration-300 ease-out h-[1px] w-full rounded-sm translate-y-32 border dark:border-light/75 border-dark/75 border-solid`}></span>
                    </div>

                    

                    <div className='col-span-6 md:col-span-12'>
                    <MajorProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/two"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                        <MajorProject 
                            
                            
                            title = "Crypto Screener Application"
                            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                            link="/portfolio/three"
                            info="Featured Project"
                            img={project1}
                            github="/"

                            
                            />
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                    <MajorProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/four"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                    <MajorProject 
                        
                        
                        title = "Crypto Screener Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                        link="/portfolio/five"
                        info="Featured Project"
                        img={project1}
                        github="/"

                        
                        />
                    </div>
                    


                </div>

                <div>
                    <Carousel />
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects
