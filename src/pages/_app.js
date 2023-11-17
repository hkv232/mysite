import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Rubik} from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from "styled-components";

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik'
})

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  // scrollbar-width: none;
  color: black;
  background: url("./img/star-background.gif");
  background-opacity: 0.2;
  background-attachment: fixed;

  &::-webkit-scrollbar{
    display: none;
  }
`;


export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
    
    <Head>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='/images/profile/peacock-logo.png' />
    </Head>

    <main className={`${rubik.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      
      <Footer />


    </main>


    </>
    

);
}

// anything i pass here will treated as the new page
// will need to learn more about the paths and props