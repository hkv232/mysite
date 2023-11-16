import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Harshith Vanam</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>


      <TransitionEffect />
      
      <main className=' dark:text-light flex items-center text-dark w-full p-10 min-h-screen flex-col z-0' >
        <Layout className='py-10 px-20 mdlg:px-10'>
          <div className="flex items-center justify-between w-full mdlg:flex-col">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Harshith Vanam" className='w-[90%] mdlg:w-full h-auto ' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw' />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center mdlg:w-full mdlg:text-center'>

              <AnimatedText text ="Turning Vision Into Reality With Code And Design" className='text-7xl text-left xl:text-6xl lg:text-5xl mdlg:text-center md:text-4xl'/>

              <p className='my-4 text-lg font-medium '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>

              <div className='flex items-center self-start mt-2 mdlg:self-center'>
                <Link href="/Harshith_Vanam_Resume.pdf" target='_blank'
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold  hover:bg-light hover:text-dark border border-1 border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-300 ease' download={false}
                >Resume
                <LinkArrow className={"flex w-6 ml-3"} />
                
                
                </Link>
                {/* <Link href="mailto:harshithkvanam@gmail.com" target='_blank' className='ml-16 text-lg font-medium capitalize text-dark underline dark:text-light '>Contact</Link> */}
                
                <Link href="mailto:harshithkvanam@gmail.com" target='_blank'
                className='ml-10 text-lg font-medium capitalize underline text-dark p-2.5 px-11 rounded-lg hover:bg-dark hover:text-light border border-1 border-dark hover:border-transparent transition-all duration-300 ease dark:text-light dark:border-light dark:bg-none hover:dark:bg-light hover:dark:text-dark'
                >Contact</Link>
              </div>


            </div>
          </div>

        </Layout> 
      </main>
    </>
  )
}
