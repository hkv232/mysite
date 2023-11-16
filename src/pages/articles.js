import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'

const articles = () => {
  return (
    <>
    
        <Head>
            {/* gives good SEO for portfolio */}
            <title>Articles | Harshith Vanam</title>
            <meta name='description' content='any description' />

        </Head>

        <TransitionEffect />

        <main>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16' />

            </Layout>
        </main>
    
    
    
    </>
  )
}

export default articles
