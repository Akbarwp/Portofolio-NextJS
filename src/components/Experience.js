import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LilIcon from './LilIcon';

export default function Experience() {

    const Details = ({position, company, companyLink, time, address, work}) => {
        const ref = useRef(null);

        return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[90%] md:w-[80%] xl:w-[60%] mx-auto flex flex-col items-center justify-between'>
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
            <div className='my-32 lg:my-64'>
                <h2 className='w-full mb-20 xl:mb-32 font-bold text-5xl md:text-7xl xl:text-8xl text-center dark:text-light'>Experience</h2>
                <div ref={ref} className='w-full xl:w-[75%] mx-auto relative'>

                    <motion.div style={{ scaleY:scrollYProgress }} className='absolute left-0 md:left-5 lg:left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'></motion.div>

                    <ul className='w-full ml-4 flex flex-col items-start justify-between'>
                        <Details position="Backend Developer" company="Deus Code" companyLink="https://deuscode.co.id/" time="April - June 2023" address="Surabaya"
                        work="Laravel project related to admin panel for MSME FLS Beaute. The FLS Beaute admin panel has a multi-user feature consisting of superadmin, distributors, and sellers which is used to manage sales, product management, and product returns. Laravel project related admin panel for Paperus. The Paperus admin panel is used for sales management and product management which is used for form creation purposes, from offer forms to delivery." />

                        <Details position="Communication Media Division" company="HMSI Undika" companyLink="https://www.instagram.com/hmsi_undika/" time="January 2021 - April 2022" address="Universitas Dinamika"
                        work="I was responsible for designing Instagram feeds to deliver various important information to students and the academic community, including campus updates, events such as webinars, and competition-related information. In this role, I focused on creating visually appealing and informative content to increase engagement and effectively disseminate information through the university’s social media platforms." />

                        <Details position="RnD UI/UX" company="Java Developer Group (JDG)" companyLink="https://www.instagram.com/javadevgroup/" time="December 2020 - January 2022" address="Universitas Dinamika"
                        work="I played a role in organizing events and competitions held by JDG. Additionally, I studied and developed skills in UI/UX for mobile and website platforms, focusing on creating optimal user experiences and intuitive interface designs." />
                    </ul>
                </div>
            </div>
        </>
    );
}
