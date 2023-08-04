import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {

    const Skill = ({name, x, y, color}) => {
        return (
            <motion.div className="py-3 px-6 flex items-center justify-center rounded-full font-semibold text-light shadow-dark dark:shadow-light cursor-pointer absolute" style={{ backgroundColor:color }} whileHover={{ scale:1.05 }} initial={{ x:0, y:0 }} whileInView={{ x:x, y:y }} transition={{ duration:1.5 }} viewport={{ once:true }}>
                {name}
            </motion.div>
        );
    }

    return (
        <>
            <h2 className='w-full mt-64 font-bold text-8xl text-center dark:text-light'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='p-8 flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark dark:shadow-light cursor-pointer' whileHover={{ scale: 1.05 }}>
                    Web
                </motion.div>

                <Skill name="HTML" x="-20vw" y="2vw" color="#E34F26" />
                <Skill name="CSS" x="-5vw" y="-10vw" color="#1572B6" />
                <Skill name="JavaScript" x="20vw" y="6vw" color="#F7DF1E" />
                <Skill name="PHP" x="0vw" y="10vw" color="#777BB4" />
                <Skill name="Java" x="-20vw" y="-15vw" color="#0C6EB6" />
                <Skill name="Oracle" x="15vw" y="-12vw" color="#F80000" />
                <Skill name="MySQL" x="32vw" y="-5vw" color="#4479A1" />
                <Skill name="SQLServer" x="0vw" y="-20vw" color="#CC2927" />
                <Skill name="Laravel" x="-25vw" y="18vw" color="#FF2D20" />
                <Skill name="ReactJS" x="18vw" y="18vw" color="#61DAFB" />
                <Skill name="Git" x="-25vw" y="-5vw" color="#F05032" />
                <Skill name="GitHub" x="25vw" y="-20vw" color="#181717" />
                <Skill name="Bootstrap" x="-35vw" y="7vw" color="#7952B3" />
                <Skill name="TailwindCSS" x="3vw" y="20vw" color="#06B6D4" />
            </div>
        </>
    );
}
