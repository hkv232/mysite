import { React, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Bullets from './Bullets'

const Details = ({type, time, place, info}) => {
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
                    {type}<span className='text-primary'></span>
                </h3>

                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time}&nbsp;|&nbsp;{place}

                </span>
                <p className='font=medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )

}

const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-7xl mb-20 w-full text-center'>Education</h2>
      <h3 className='font-medium text-4xl mb-10 w-full text-center'>BBA - University at Texas at Austin</h3>


      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-2 w-[3px] h-full bg-dark origin-top dark:bg-light' />
        <ul className='w-full flex flex-col items-start justify-between ml-5'>
            <Details 
                type="Management Information Systems Major"
                time = "2021-2023"
                place = "McCombs"
                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
            />
            <Details 
                type="Corporate Finance & Investment Banking Minor"
                time = "2018-2021"
                place = "McCombs"
                info="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                share short-form video content, including designing and implementing a new user interface and developing 
                the backend infrastructure to support the feature."
            />
            <Details 
                type="Computer Science Certificate"
                time = "2020-2022"
                place = "UT CS"
                info="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                share short-form video content, including designing and implementing a new user interface and developing 
                the backend infrastructure to support the feature."
                
            /> <br />
        </ul>
      </div>
    </div>
  )
}

export default Education
