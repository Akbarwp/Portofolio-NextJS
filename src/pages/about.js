import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from "next/head";

import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ProfilePic from "../../public/images/Akbar.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

export default function about() {

    const AnimatedNumbers = ({value}) => {
        const ref = useRef(null);
        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, {duration: 3000});
        const isInView = useInView(ref, {once: true});

        useEffect(() => {
            if (isInView) {
                motionValue.set(value);
            }

        }, [isInView, value, motionValue]);

        useEffect(() => {
            springValue.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            });

        }, [springValue, value]);

        return <span ref={ref}></span>
    }

    const addMe = (game) => {
        if (game === "valorant") {
            return alert('Add me: Laravel#java');
        } else if (game === "hi3") {
            return alert('Add me: 11280589');
        } else if (game === "hsr") {
            return alert('Add me: 802993176');
        }
    }

    return (
        <>
            <Head>
                <title>Portofolio with NextJS | About</title>
                <meta name="description" content="Generated by Create next app" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="don't know thus don't like" className="text-4xl md:text-6xl mb-12 lg:mb-16 capitalize" />
                    
                    <div className='grid w-full grid-cols-3 md:grid-cols-8 gap-16'>
                        <div className='col-span-3 md:col-span-8 xl:col-span-3 flex flex-col items-start justify-center dark:text-light text-lg md:text-base md:order-last xl:order-first'>
                            <h2 className='mb-4 !text-xl font-bold uppercase text-dark/75 dark:text-light/75 mx-auto md:mx-0'>Introduce Myself</h2>
                            <p className='mb-10 md:mb-4 font-medium text-center md:text-left'>
                                I&apos;m a college student from Universitas Dinamika (Stikom Surabaya). And I majored in Information Systems. I&apos;m currently interested in Web Development on the Back-end Developer. And also I&apos;m studying the PHP framework is <span className="text-[#FF2D20]">Laravel</span>. and as a complement I also learn <span className="text-[#61DAFB]">ReactJS</span> for the Front-end.
                            </p>
                            <div className='mb-4 font-medium'>
                                Before that I also studied several other programming languages, like :
                                <div className='pl-3 md:pl-0'>
                                    <li>Java;</li>
                                    <li>Web language (HTML, CSS, Javascript);</li>
                                    <li>PHP;</li>
                                    <li>SQL (Oracle, MySQL, SQLServer).</li>
                                </div>
                            </div>
                            <div className='mb-10 md:mb-4 font-medium'>
                                On Java I studied about :
                                <div className='pl-3 md:pl-0'>
                                    <li>OOP.</li>
                                    <li>Make desktop applications integrated with MySQL and Oracle.</li>
                                    <li>Make a mobile app integrated with Firebase.</li>
                                </div>
                            </div>
                            <p className='mb-10 md:mb-4 font-medium text-center md:text-left'>
                                When in Senior High School, I studied about editing video and photo, and photography. Because of that, I joined the HIMA Information System in university. I joined the communication media division for 1 year or period. And RnD UI/UX in Java Developer Group (JDG).
                            </p>
                            <p className='font-medium text-center md:text-left'>
                                Outside of programming, I also watch anime, play badminton, and gamer (maybe). Now I play some games like <span onClick={() => {addMe('valorant')}} className='hover:text-primary hover:dark:text-primaryDark cursor-pointer font-semibold'>Valorant</span>, <span onClick={() => {addMe('hi3')}} className='hover:text-primary hover:dark:text-primaryDark cursor-pointer font-semibold'>Honkai Impact 3</span>, <span onClick={() => {addMe('hsr')}} className='hover:text-primary hover:dark:text-primaryDark cursor-pointer font-semibold'>Honkai Star Rail</span>, PES 2017, and Rubik 4x4.
                            </p>
                        </div>

                        <div className='col-span-3 md:col-span-4 xl:col-span-3 relative h-max p-8 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark order-first md:order-none'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light'></div>
                            <Image src={ProfilePic} alt='AkbarWP' className='w-full h-auto rounded-2xl' priority />
                        </div>

                        <div className='col-span-3 md:col-span-4 xl:col-span-2 flex flex-col items-center md:items-end justify-center md:justify-around text-right dark:text-light'>
                            <div className='flex flex-col items-center lg:items-end justify-center mb-10 md:mb-0'>
                                <span className='inline-block text-5xl lg:text-6xl font-bold'>
                                    <AnimatedNumbers value={2020} /> - now
                                </span>
                                <p className='text-base'>Information System</p>
                                <h2 className='text-xl font-medium text-dark/75 dark:text-light/75'>
                                    Universitas Dinamika
                                </h2>
                            </div>

                            <div className='flex flex-col items-center lg:items-end justify-center'>
                                <span className='inline-block text-5xl lg:text-6xl font-bold'>
                                    <AnimatedNumbers value={2017} /> - <AnimatedNumbers value={2020} />
                                </span>
                                <p className='text-base'>Science</p>
                                <h2 className='text-xl font-medium text-dark/75 dark:text-light/75'>
                                    SMAN 1 Waru
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    );
}
