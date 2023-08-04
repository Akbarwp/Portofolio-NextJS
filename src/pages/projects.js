import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

import laravelBlog from '../../public/portofolio/9.Laravel-Blog.jpg';
import flsBeaute from '../../public/portofolio/11.FLS-magang.jpg';
import paperusFront from '../../public/portofolio/10.1.Paperus-Frontend.jpg';
import paperusBack from '../../public/portofolio/10.2.Paperus-Backend.jpg';
import laraSurvey from '../../public/portofolio/2.Laravel-react-survey.jpg';
import uasBasiData from '../../public/portofolio/1.UAS-PBD.jpg';
import uasBI from '../../public/portofolio/4.UAS-BI.jpg';
import javaProgram from '../../public/portofolio/7.Belajar-Java.jpg';
import phpProgram from '../../public/portofolio/8.Belajar-PHP.jpg';
import tailwindProgram from '../../public/portofolio/6.Belajar-TailwindCSS.jpg';
import portofolioBahasa from '../../public/portofolio/12.PortofolioBahasa.jpg';
import uasIMK from '../../public/portofolio/3.UAS-IMK.png';
import uasMobile from '../../public/portofolio/5.UAS-Mobile.png';

export default function project() {

    const FeaturedProject = ({type, title, summary, img, link, github}) => {
        return (
            <article className='w-full flex items-center justify-between relative p-12 rounded-3xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark shadow-2xl'>
                <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border rounded-lg border-dark/75 dark:border-light/75 shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

                    <div className='mt-2 flex items-center'>
                        <motion.a href={github} target="_blank" className="w-10" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon />
                        </motion.a>
                        <Link href={link} target='_blank' className='ml-4 p-2 px-6 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark dark:dark:border-light transition-all'>Visit Project</Link>
                    </div>
                </div>
            </article>
        );
    }

    const Project = ({type, title, img, link, github}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-3xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                        <motion.a href={github} target="_blank" className="w-8" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon />
                        </motion.a>
                    </div>
                </div>
            </article>
        );
    }

    const ProjectVertical = ({type, title, img, link, github}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-1/2 h-auto mx-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-3xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                        <motion.a href={github} target="_blank" className="w-8" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon />
                        </motion.a>
                    </div>
                </div>
            </article>
        );
    }

    const ProjectLink = ({type, title, img, link}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-3xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                    </div>
                </div>
            </article>
        );
    }

    const ProjectLinkVertical = ({type, title, img, link}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-1/2 h-auto mx-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-3xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <>
            <Head>
                <title>Portofolio with NextJS | Project</title>
                <meta name="description" content="Generated by Create next app" />
            </Head>
            <main className='w-full pb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Myself Project" className="text-6xl mb-16 capitalize" />

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject type="Webiste Blog" title="Laravel Blog" img={laravelBlog} link="https://github.com/Akbarwp/Laravel-Filament-Blog" github="https://github.com/Akbarwp/Laravel-Filament-Blog" summary="A project about creating a blog and also creating an admin panel using Filament. The blog also has a searching feature and a comments feature" />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Website E-Commerce" title="Project Laravel E-Commerce (Frontend)" img={paperusFront} link="https://github.com/Akbarwp/Project-Paperus-ECommerce" github="https://github.com/Akbarwp/Project-Paperus-ECommerce" />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Admin Panel" title="Project Laravel E-Commerce (Backend)" img={paperusBack} link="https://github.com/Akbarwp/Project-Paperus-AdminPanel" github="https://github.com/Akbarwp/Project-Paperus-AdminPanel" />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject type="Admin Panel" title="Project Internship FLS Beaute" img={flsBeaute} link="https://github.com/Akbarwp/AdminPanel-FLS-Beaute" github="https://github.com/Akbarwp/AdminPanel-FLS-Beaute" summary="Project on creating a website admin panel for FLS Beaute during an Studi Independen internship at Deus Code. The admin panel has a multi-user feature consisting of superadmin, distributor and seller. Admin panel is used for managing sales, product management, product returns, etc." />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Desktop Applications" title="Final Exam Project Database Programming" img={uasBasiData} link="https://github.com/Akbarwp/UAS-PBD" github="https://github.com/Akbarwp/UAS-PBD" />
                        </div>
                        <div className='col-span-6'>
                            <ProjectLink type="Dashboard Power BI" title="Final Exam Project Business Intelligence" img={uasBI} link="https://drive.google.com/drive/folders/1Sp_i-uCXQmd1uVUMDHBjr_ChA6bRtVc7" />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject type="Website Survey" title="Project Laravel React Survey" img={laraSurvey} link="https://github.com/Akbarwp/Laravel-React-Survey" github="https://github.com/Akbarwp/Laravel-React-Survey" summary="The project is about website make a surveys using Laravel for Backend and ReactJS for Frontend, and a little animation using LottieFiles." />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Learning Outcomes" title="Java Programming" img={javaProgram} link="https://github.com/Akbarwp/Belajar-Java" github="https://github.com/Akbarwp/Belajar-Java" />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Learning Outcomes" title="PHP Programming" img={phpProgram} link="https://github.com/Akbarwp/Belajar-PHP" github="https://github.com/Akbarwp/Belajar-PHP" />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Learning Outcomes" title="TailwindCSS Programming" img={tailwindProgram} link="https://github.com/Akbarwp/Belajar-TailwindCSS" github="https://github.com/Akbarwp/Belajar-TailwindCSS" />
                        </div>
                        <div className='col-span-6'>
                            <Project type="Portofolio" title="Portofolio with TailwindCSS" img={portofolioBahasa} link="https://akbarwp.github.io/Portofolio-TailwindCSS/" github="https://github.com/Akbarwp/Portofolio-TailwindCSS" />
                        </div>

                        <div className='col-span-6'>
                            <ProjectLinkVertical type="UI/UX" title="Final Exam Project UI/UX" img={uasIMK} link="https://drive.google.com/drive/folders/13SmoXtAG8IPLdpXTWRWnRjbNbaJprikB" />
                        </div>
                        <div className='col-span-6'>
                            <ProjectVertical type="Mobile Applications" title="Final Exam Project Mobile Programming" img={uasMobile} link="https://github.com/Akbarwp/UAS_Mobile" github="https://github.com/Akbarwp/UAS_Mobile" />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
