import '@/styles/globals.css';
import { Montserrat } from "next/font/google";

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={`${montserrat.variable} font-montserrat w-full min-h-screen bg-light dark:bg-dark transition`}>
                <AnimatePresence mode='wait'>
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
            </main>

            <Footer />
        </>
    )
}
