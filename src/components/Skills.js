import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='py-3 px-3 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light absolute dark:text-dark dark:bg-light lg:py-2 md:text-sm'

        whileHover={{scale:1.05}}
        initial = {{x:0 , y:0}}
        whileInView={{x:x, y:y, transition:{duration: 1}}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>

        
  )

}

const Skills = () => {
  return (
    <>
    
    <h2 className='font-bold text-7xl mt-64 w-full text-center md:text-6xl md:mt-48'>Skills</h2>
    <div className='w-full h-[90vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[90vh] md:h-[75vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

        <motion.div className='p-8 px-10 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light'

        whileHover={{scale:1.05}}
        >
            &nbsp;
        </motion.div>

        <Skill name="CSS" x="-18vw" y="2vw"/>
        <Skill name="HTML" x="-6vw" y="-10vw"/>
        <Skill name="Tailwind" x="20vw" y="6vw"/>
        <Skill name="Framer-Motion" x="0vw" y="11vw"/>
        <Skill name="ReactJS" x="-18vw" y="-15vw"/>
        <Skill name="NextJS" x="17vw" y="-12vw"/>
        <Skill name="Agile" x="13vw" y="-6vw"/>
        <Skill name="JavaScript" x="28vw" y="-5vw"/>
        <Skill name="Wireframing" x="0vw" y="-18vw"/>
        <Skill name="Prototyping" x="-24vw" y="15vw"/>
        <Skill name="Figma" x="18vw" y="18vw"/>
        <Skill name="CSPO" x="-10vw" y="20vw"/>
    </div>
    
    </>
  )
}

export default Skills
