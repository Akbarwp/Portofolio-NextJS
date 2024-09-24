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
import laravelAHP from '../../public/portofolio/14.Laravel-AHP.jpg';
import laravelTOPSIS from '../../public/portofolio/15.Laravel-TOPSIS.jpg';
import laravelPresensi from '../../public/portofolio/16.Laravel-Presensi.jpg';
import laravelBigData from '../../public/portofolio/17.Laravel-BigData.jpg';
import laravelInertia from '../../public/portofolio/18.Laravel-Inertia.jpg';
import uasIMK from '../../public/portofolio/3.UAS-IMK.png';
import uasMobile from '../../public/portofolio/5.UAS-Mobile.png';
import TransitionEffect from '@/components/TransitionEffect';

import laravelLaundry from '../../public/portofolio/13.Laravel-Laundry.jpg';

export default function project() {

    const FeaturedProject = ({type, title, summary, img, link, github}) => {
        return (
            <article className='w-full flex flex-col lg:flex-row items-center justify-between relative p-4 md:p-12 rounded-3xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark shadow-2xl'>
                <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border rounded-lg border-dark/75 dark:border-light/75 shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full lg:w-1/2 flex flex-col items-start justify-between mt-5 lg:mt-0 pl-0 lg:pl-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-lg md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-2xl lg:text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-sm md:text-base text-dark dark:text-light'>{summary}</p>

                    <div className='mt-2 flex items-center'>
                        <motion.a href={github} target="_blank" className="w-8 md:w-10" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon className="text-[#181717] dark:text-light" />
                        </motion.a>
                        <Link href={link} target='_blank' className='ml-4 p-1 px-3 md:p-2 md:px-6 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base md:text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark dark:dark:border-light transition-all'>Visit Project</Link>
                    </div>
                </div>
            </article>
        );
    }

    const Project = ({type, title, img, link, github}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-3 md:p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-lg md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-2xl xl:text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                        <motion.a href={github} target="_blank" className="w-8" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon className="text-[#181717] dark:text-light" />
                        </motion.a>
                    </div>
                </div>
            </article>
        );
    }

    const ProjectVertical = ({type, title, img, link, github}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-3 md:p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto mx-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-lg md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-2xl xl:text-4xl font-bold dark:text-light'>{title}</h2>
                    </Link>

                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='p-1 px-3 rounded-lg border bg-dark dark:bg-light text-light dark:text-dark text-base font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light hover:border hover:border-dark hover:dark:border-light transition-all'>Visit</Link>
                        <motion.a href={github} target="_blank" className="w-8" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon className="text-[#181717] dark:text-light" />
                        </motion.a>
                    </div>
                </div>
            </article>
        );
    }

    const ProjectLink = ({type, title, img, link}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-3 md:p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-lg md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-2xl xl:text-4xl font-bold dark:text-light'>{title}</h2>
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
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light rounded-br-2xl bg-light dark:bg-dark p-3 md:p-6 relative'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'></div>

                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <Image src={img} alt={title} className='w-full h-auto mx-auto border border-dark/75 dark:border-light/75 rounded-2xl shadow-lg hover:scale-105 transition-all' priority />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-lg md:text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='w-full my-2 text-left text-2xl xl:text-4xl font-bold dark:text-light'>{title}</h2>
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
            <TransitionEffect />
            <main className='w-full pb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Myself Project" className="text-4xl md:text-6xl mb-12 lg:mb-16 capitalize" />

                    <div className='grid grid-cols-12 md:grid-cols-6 md:gap-14 lg:gap-24 gap-y-24 md:gap-y-32'>
                        <div className='col-span-12 md:col-span-6'>
                            <FeaturedProject type="Tugas Akhir (Thesis)" title="Laravel Laundry" img={laravelLaundry} link="https://github.com/Akbarwp/Laravel-Laundry" github="https://github.com/Akbarwp/Laravel-Laundry" summary="This application is the result of my Tugas Akhir (Thesis), which I have been working on over the past few months. The project not only fulfills the requirements for completing my degree but also serves as an opportunity to apply the knowledge and skills I’ve gained throughout my studies. This research proposes a solution in the form of an application that can monitor the laundry program, facilitating the social program for Gamis, implementing priority services, and generating digital reports. The application is built using the Priority Service method, helping to manage data, transactions, and effectively monitor the Gamis social program in the laundry business." />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Decision Support System" title="Laravel TOPSIS" img={laravelTOPSIS} link="https://github.com/Akbarwp/Laravel-SPK-TOPSIS" github="https://github.com/Akbarwp/Laravel-SPK-TOPSIS" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Decision Support System" title="Laravel AHP" img={laravelAHP} link="https://github.com/Akbarwp/Laravel-SPK-AHP" github="https://github.com/Akbarwp/Laravel-SPK-AHP" />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                            <FeaturedProject type="Web Applications" title="Project Laravel React Survey" img={laraSurvey} link="https://github.com/Akbarwp/Laravel-React-Survey" github="https://github.com/Akbarwp/Laravel-React-Survey" summary="Laravel React Survey is a website that provides flexible survey creation features, similar to Google Forms. Built with Laravel and ReactJS, this site allows users to easily create, manage, and share surveys, while efficiently collecting responses in a modern and responsive interface." />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Web Applications" title="Laravel Presensi" img={laravelPresensi} link="https://github.com/Akbarwp/Laravel-Presensi" github="https://github.com/Akbarwp/Laravel-Presensi" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Web Applications" title="Laravel Inertia" img={laravelInertia} link="https://github.com/Akbarwp/Laravel-Inertia" github="https://github.com/Akbarwp/Laravel-Inertia" />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                            <FeaturedProject type="Sentiment Analysis" title="Laravel Big Data" img={laravelBigData} link="https://github.com/Akbarwp/Laravel-BigData" github="https://github.com/Akbarwp/Laravel-BigData" summary="Laravel Big Data is a website designed for sentiment analysis on reviews of the PLN Mobile application using Naive Bayer method. With features like Vectorizer and Confusion Matrix, this site enables users to understand and analyze user sentiments towards the application through structured data. The interactive interface and advanced analysis tools assist users in evaluating the quality of reviews and accurately identifying sentiment trends. The data used was obtained from the Kaggle website related to user reviews of the PLN Mobile application on Google Play. The data used can be accessed at the following link Kaggle PLN Mobile" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Desktop Applications" title="Final Exam Project Database Programming" img={uasBasiData} link="https://github.com/Akbarwp/UAS-PBD" github="https://github.com/Akbarwp/UAS-PBD" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <ProjectLink type="Dashboard Power BI" title="Final Exam Project Business Intelligence" img={uasBI} link="https://drive.google.com/drive/folders/1Sp_i-uCXQmd1uVUMDHBjr_ChA6bRtVc7" />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                            <FeaturedProject type="Web Applications" title="Laravel Blog" img={laravelBlog} link="https://github.com/Akbarwp/Laravel-Filament-Blog" github="https://github.com/Akbarwp/Laravel-Filament-Blog" summary="Laravel Blog is a website that offers comprehensive features for blog content management, including CRUD for blogs, users, and categories. Powered by Laravel, Laravel Breeze, and Filament, this site provides a user-friendly interface for creating, reading, editing, and deleting blog articles, as well as efficiently managing users and categories. The blog page is designed to showcase content attractively, making it easy for visitors to find and read relevant articles." />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Website E-Commerce" title="Project Laravel E-Commerce (Frontend)" img={paperusFront} link="https://github.com/Akbarwp/Project-Paperus-ECommerce" github="https://github.com/Akbarwp/Project-Paperus-ECommerce" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <Project type="Admin Panel" title="Project Laravel E-Commerce (Backend)" img={paperusBack} link="https://github.com/Akbarwp/Project-Paperus-AdminPanel" github="https://github.com/Akbarwp/Project-Paperus-AdminPanel" />
                        </div>

                        <div className='col-span-12 md:col-span-6'>
                            <FeaturedProject type="Admin Panel" title="Project Internship FLS Beaute" img={flsBeaute} link="https://github.com/Akbarwp/AdminPanel-FLS-Beaute" github="https://github.com/Akbarwp/AdminPanel-FLS-Beaute" summary="Admin Panel FLS Beaute is a website that provides an admin panel for FLS Beaute, specifically designed during an independent study internship at Deus Code. This admin panel is equipped with multi-user features, including roles for superadmin, distributor, and seller, allowing for efficient management of sales and products. With an intuitive interface, this admin panel supports effective management, ensuring that each user can perform their functions easily and in an organized manner." />
                        </div>

                        <div className='col-span-12 md:col-span-3'>
                            <ProjectLinkVertical type="UI/UX" title="Final Exam Project UI/UX" img={uasIMK} link="https://drive.google.com/drive/folders/13SmoXtAG8IPLdpXTWRWnRjbNbaJprikB" />
                        </div>
                        <div className='col-span-12 md:col-span-3'>
                            <ProjectVertical type="Mobile Applications" title="Final Exam Project Mobile Programming" img={uasMobile} link="https://github.com/Akbarwp/UAS_Mobile" github="https://github.com/Akbarwp/UAS_Mobile" />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
