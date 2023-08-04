import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LilIcon from './LilIcon';

export default function Experience() {

    const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null);

        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LilIcon reference={ref} />
            <motion.div initial={{ y:50 }} whileInView={{ y:0 }} transition={{ duration:0.5, type:'spring' }}>
                <h3 className='capitalize font-bold text-2xl dark:text-light'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full dark:text-light'>
                    {work}
                </p>
            </motion.div>
        </li>
    }

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <>
            <div className='my-64'>
                <h2 className='w-full mb-32 font-bold text-8xl text-center dark:text-light'>Experience</h2>
                <div ref={ref} className='w-[75%] mx-auto relative'>

                    <motion.div style={{ scaleY:scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'></motion.div>

                    <ul className='w-full ml-4 flex flex-col items-start justify-between'>
                        <Details position="Backend Developer" company="Deus Code" companyLink="https://deuscode.co.id/" time="April - June 2023" address="Surabaya"
                        work="I at Deus Code was given a project using Laravel to create an admin panel for UMKM FLS Beaute and Paperus. FLS Beaute admin panel has a multi-user feature consisting of superadmin, distributor, and seller. This admin panel is used to manage sales, product management, and product returns. The Paperus admin panel is used for sales management and product management. The Paperus admin panel is used for the purposes of creating forms, from bidding forms to delivery forms." />

                        <Details position="Communication Media Division" company="HMSI Undika" companyLink="https://www.instagram.com/hmsi_undika/" time="January 2021 - April 2022" address="Universitas Dinamika"
                        work="I am in the Communication Media Division in charge of designing an Instagram feed to convey information about information from campus, events, or competitions." />

                        <Details position="RnD UI/UX" company="Java Developer Group (JDG)" companyLink="https://www.instagram.com/javadevgroup/" time="December 2020 - January 2022" address="Universitas Dinamika"
                        work="I am in charge of designing events and competitions held by JDG itself. And studied about UI/UX on Mobile and Website." />
                    </ul>
                </div>
            </div>
        </>
    );
}
