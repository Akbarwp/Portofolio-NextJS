import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {

    const Skill = ({name, x, y, color}) => {
        return (
            <motion.div className={`py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 flex items-center justify-center rounded-full text-sm md:text-base font-semibold text-dark dark:text-light md:text-light md:dark:text-dark shadow-dark dark:shadow-light cursor-pointer absolute md:bg-dark md:dark:bg-light bg-transparent`} whileHover={{ scale:1.05 }} initial={{ x:0, y:0 }} whileInView={{ x:x, y:y }} transition={{ duration:1.5 }} viewport={{ once:true }}>
                {name}
            </motion.div>
        );
    }

    return (
        <>
            <h2 className='w-full mt-64 font-bold text-5xl md:text-7xl xl:text-8xl text-center dark:text-light'>Skills</h2>
            <div className='w-full h-[70vh] xl:h-screen relative flex items-center justify-center rounded-full bg-circularLight md:circularLightXL dark:bg-circularDark md:dark:bg-circularDarkXL'>
                <motion.div className='p-2 md:p-8 text-base flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark dark:shadow-light cursor-pointer' whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>

                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="20vw" y="6vw" />
                <Skill name="PHP" x="0vw" y="10vw" />
                <Skill name="Java" x="-20vw" y="-15vw" />
                <Skill name="Oracle" x="15vw" y="-12vw" />
                <Skill name="MySQL" x="32vw" y="-5vw" />
                <Skill name="SQLServer" x="0vw" y="-20vw" />
                <Skill name="Laravel" x="-25vw" y="18vw" />
                <Skill name="ReactJS" x="18vw" y="18vw" />
                <Skill name="Git" x="-25vw" y="-5vw" />
                <Skill name="GitHub" x="25vw" y="-20vw" />
                <Skill name="Bootstrap" x="-35vw" y="7vw" />
                <Skill name="TailwindCSS" x="3vw" y="20vw" />
            </div>
        </>
    );
}
