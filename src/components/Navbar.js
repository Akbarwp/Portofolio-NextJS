import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useRouter } from "next/router";
import {InstagramIcon, LinkedInIcon, GithubIcon, ShowwcaseIcon, ChromeIcon, SunIcon, MoonIcon} from "./Icons";
import useThemeSwitch from "./hooks/useThemeSwitch";

export default function Navbar() {

    const [mode, setMode] = useThemeSwitch();
    const [isOpen, setIsOpen] = useState(false);

    function CustomLink ({href, title, className=""}) {
        const router = useRouter();

        return (
            <Link href={href} className={`${className} relative group`}>
                {title}

                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 rounded group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        );
    }

    function CustomMobileLink ({href, title, className="", toggle}) {
        const router = useRouter();
        const handleClick = () => {
            router.push(href);
        }

        return (
            <button href={href} className={`${className} relative group text-white dark:text-dark my-2`} onClick={handleClick}>
                {title}

                <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-1 rounded group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </button>
        );
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const onScroll = () => {
        window.onscroll = function() {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
        
            if (window.scrollY > fixedNav) {
                header.classList.remove('relative');
                header.classList.remove('bg-light');
                header.classList.remove('dark:bg-dark');
                header.classList.add('navbar-fixed');
                
            } else {
                header.classList.remove('navbar-fixed');
                header.classList.add('relative');
                header.classList.add('bg-light');
                header.classList.add('dark:bg-dark');
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true });
        }
    }, []);

    return (
        <>
            <header className="flex items-center justify-between relative w-full bg-light dark:bg-dark transition px-4 md:px-12 lg:px-32 py-10 lg:py-8 font-medium dark:text-light">

                <button className="flex flex-col justify-center items-center lg:hidden" onClick={handleClick}>
                    <span className={`block h-0.5 w-6 bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`block h-0.5 w-6 bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-in-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block h-0.5 w-6 bg-dark dark:bg-light rounded-sm transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                {/* Website */}
                <div className="lg:flex hidden w-full justify-between items-center">
                    <nav>
                        <CustomLink href="/" title="Home" className="mr-4 text-dark dark:text-white" />
                        <CustomLink href="/about" title="About" className="mx-4 text-dark dark:text-white" />
                        <CustomLink href="/projects" title="Projects" className="mx-4 text-dark dark:text-white" />
                        <CustomLink href="/gallery" title="Gallery" className="ml-4 text-dark dark:text-white" />
                    </nav>
                    
                    <nav className="flex items-center justify-center flex-wrap">
                        <motion.a href="https://www.instagram.com/akbarwp002/" target={"_blank"} className="w-6 mr-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <InstagramIcon />
                        </motion.a>
                        
                        <motion.a href="https://www.linkedin.com/in/akbar-wibowo-putra-a81810220" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <LinkedInIcon />
                        </motion.a>
                        
                        <motion.a href="https://github.com/Akbarwp" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <GithubIcon className="text-[#181717] dark:text-light" />
                        </motion.a>
                        
                        <motion.a href="https://www.showwcase.com/akbarwp" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <ShowwcaseIcon className="text-black dark:text-light" />
                        </motion.a>
                        
                        <motion.a href="https://akbarwp.github.io/Portofolio-TailwindCSS/" target={"_blank"} className="w-6 ml-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                            <ChromeIcon />
                        </motion.a>

                        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className={`ml-3 flex items-center justify-center p-1 text-[22px] rounded-full ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`} >
                            {
                                mode === "dark" ? <SunIcon /> : <MoonIcon />
                            }
                        </button>
                    </nav>
                </div>

                {/* Mobile */}
                {
                    isOpen ?
                    <motion.div className="lg:hidden flex flex-col justify-between items-center min-w-[90vw] md:min-w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 gap-y-3" initial={{ scale:0, opacity:0, x:"-50%", y:"-50%" }} animate={{ scale:1, opacity:1 }}>
                        <nav className="flex flex-col items-center justify-center">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Project" className="" toggle={handleClick} />
                            <CustomMobileLink href="/gallery" title="Gallery" className="" toggle={handleClick} />
                        </nav>
                        
                        <nav className="flex items-center justify-center flex-wrap">
                            <motion.a href="https://www.instagram.com/akbarwp002/" target={"_blank"} className="w-6 mr-1 md:mr-3 " whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                                <InstagramIcon />
                            </motion.a>
                            
                            <motion.a href="https://www.linkedin.com/in/akbar-wibowo-putra-a81810220" target={"_blank"} className="w-6 mx-1 md:mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                                <LinkedInIcon />
                            </motion.a>
                            
                            <motion.a href="https://github.com/Akbarwp" target={"_blank"} className="w-6 mx-1 md:mx-3 text-light dark:text-dark rounded-md" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                                <GithubIcon className="text-light dark:text-[#181717]" />
                            </motion.a>
                            
                            <motion.a href="https://www.showwcase.com/akbarwp" target={"_blank"} className="w-6 mx-1 md:mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                                <ShowwcaseIcon className="text-light dark:text-black" />
                            </motion.a>
                            
                            <motion.a href="https://akbarwp.github.io/Portofolio-TailwindCSS/" target={"_blank"} className="w-6 ml-1 md:ml-3 " whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                                <ChromeIcon />
                            </motion.a>

                            <button onClick={() => setMode(mode === "dark" ? "light" : "dark")} className={`ml-3 flex items-center justify-center p-1 text-[22px] rounded-full ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`} >
                                {
                                    mode === "dark" ? <SunIcon /> : <MoonIcon />
                                }
                            </button>
                        </nav>
                    </motion.div>
                :
                ''
                }

                <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                    <Logo />
                </div>
            </header>
        </>
    );
}
