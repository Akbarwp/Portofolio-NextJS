import React from 'react';
import Head from 'next/head'
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';

import photo1 from '../../public/gallery/1.jpg';
import photo2 from '../../public/gallery/2.jpg';
import photo18 from '../../public/gallery/18.jpg';
import photo4 from '../../public/gallery/4.jpg';
import photo5 from '../../public/gallery/5.jpg';
import photo6 from '../../public/gallery/6.jpg';
import photo7 from '../../public/gallery/7.jpg';
import photo8 from '../../public/gallery/8.jpg';
import photo9 from '../../public/gallery/9.jpg';
import photo10 from '../../public/gallery/10.jpg';
import photo11 from '../../public/gallery/11.jpg';
import photo12 from '../../public/gallery/12.jpg';
import photo15 from '../../public/gallery/15.jpg';
import photo17 from '../../public/gallery/17.jpg';
import TransitionEffect from '@/components/TransitionEffect';

export default function gallery() {
    return (
        <>
            <Head>
                <title>Portofolio with NextJS | Project</title>
                <meta name="description" content="Generated by Create next app" />
            </Head>
            <TransitionEffect />
            <main className='w-full pb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Gallery Photo" className="text-6xl mb-16 capitalize" />

                    <div className='grid grid-cols-0 md:grid-cols-4 items-center justify-center'>
                        <Image priority src={photo1} alt={'photo1'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo4} alt={'photo4'} className='w-full h-full row-span-0 col-span-0 md:row-span-2 md:col-span-2 hover:scale-105 transition' />
                        <Image priority src={photo18} alt={'photo18'} className='w-full h-full md:row-span-2 hover:scale-105 transition' />
                        <Image priority src={photo2} alt={'photo2'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo5} alt={'photo5'} className='w-full h-full row-span-0 col-span-0 md:row-span-2 md:col-span-2 hover:scale-105 transition' />
                        <Image priority src={photo6} alt={'photo6'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo7} alt={'photo7'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo8} alt={'photo8'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo17} alt={'photo17'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo11} alt={'photo11'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo12} alt={'photo12'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo10} alt={'photo10'} className='w-full h-full row-span-0 col-span-0 md:row-span-2 md:col-span-2 hover:scale-105 transition' />
                        <Image priority src={photo15} alt={'photo15'} className='w-full h-full hover:scale-105 transition' />
                        <Image priority src={photo9} alt={'photo9'} className='w-full h-full hover:scale-105 transition' />
                    </div>
                </Layout>
            </main>
        </>
    )
}
