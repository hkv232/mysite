import { React, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Bullets from './Bullets'

const Details = ({position, company, companyLink, time, address, description}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Bullets reference={ref}/>
            <motion.div 
            
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {position}<span className='text-primary'>&nbsp;@&nbsp;{company}</span>
                </h3>

                <span className='capitalize font-medium text-dark/75'>
                    {time}&nbsp;|&nbsp;{address}

                </span>
                <p className='font=medium w-full'>
                    {description}
                </p>
            </motion.div>
        </li>
    )

}

const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-32'>
      <h2 className='font-bold text-7xl mb-32 w-full text-center'>Experience</h2>


      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-2 w-[3px] h-full bg-dark origin-top dark:bg-light' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details 
                position="Software Engineer"
                company="Google"
                time = "2022 - Present"
                address = "Mountain View, CA"
                description="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
            />
            <Details 
                position="Intern"
                company="Facebook"
                time = "Summer 2021"
                address = "Menlo Park, CA"
                description="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                share short-form video content, including designing and implementing a new user interface and developing 
                the backend infrastructure to support the feature."
            />
            <Details 
                position="Software Developer"
                company="Amazon"
                time = "2020-2021"
                address = "Seattle, WA"
                description="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                as product recommendations and user reviews, and optimizing the app's performance and reliability.
                "
            />
            <Details 
                position="Software Developer Intern"
                company="Microsoft"
                time = "Summer 2019"
                address = "Redmond, WA"
                description="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                including implementing a new user interface for a system settings panel and optimizing the performance of 
                a core system component."
            />
            <Details 
                position="Teaching Assistant"
                company="MIT"
                time = "Fall 2018"
                address = "Massachusetts Ave, Cambridge, MA"
                description="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                and graded exams and assignments."
            />
            {/* <Details 
                position=""
                company=""
                time = ""
                address = ""
                description=""
            /> */}
        </ul>
      </div>
      <div className='h-100' />
    </div>
  )
}

export default Experience
