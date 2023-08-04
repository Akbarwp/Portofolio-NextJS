import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import Logo from './Logo';
import { useRouter } from "next/router";
import {InstagramIcon, LinkedInIcon, GithubIcon, ShowwcaseIcon, ChromeIcon, SunIcon, MoonIcon} from "./Icons";
import useThemeSwitch from "./hooks/useThemeSwitch";

export default function Navbar() {

    const [mode, setMode] = useThemeSwitch();

    function CustomLink ({href, title, className=""}) {
        const router = useRouter();

        return (
            <Link href={href} className={`${className} relative group`}>
                {title}

                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 rounded group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
            </Link>
        );
    }

    return (
        <>
            <header className="flex items-center justify-between w-full bg-light dark:bg-dark transition px-32 py-8 font-medium dark:text-light">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/gallery" title="Gallery" className="ml-4" />
                </nav>
                
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://www.instagram.com/akbarwp002/" target={"_blank"} className="w-6 mr-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                        <InstagramIcon />
                    </motion.a>
                    
                    <motion.a href="https://www.linkedin.com/in/akbar-wibowo-putra-a81810220" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                        <LinkedInIcon />
                    </motion.a>
                    
                    <motion.a href="https://github.com/Akbarwp" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                        <GithubIcon />
                    </motion.a>
                    
                    <motion.a href="https://www.showwcase.com/akbarwp" target={"_blank"} className="w-6 mx-3" whileHover={{ y:-5 }} whileTap={{ scale:0.9 }}>
                        <ShowwcaseIcon />
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

                <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                    <Logo />
                </div>
            </header>
        </>
    );
}
