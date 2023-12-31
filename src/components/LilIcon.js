import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function LilIcon({reference}) {

    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );

    return (
        <>
            <figure className='absolute -left-9 md:-left-4 lg:left-0 stroke-dark dark:stroke-light'>
                <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
                    <circle cx="75" cy="50" r="20" className='stroke-primary dark:text-primaryDark stroke-1 fill-none' />
                    <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark' style={{ pathLength:scrollYProgress }} />
                    <circle cx="75" cy="50" r="10" className='stroke-1 fill-primary dark:fill-primaryDark dark:text-primaryDark animate-pulse' />
                </svg>
            </figure>
        </>
    );
}
