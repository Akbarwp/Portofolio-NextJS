import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function Logo() {
    return (
        <>
            <div className="flex items-center justify-center mt-2">
                <MotionLink href="/" className="flex items-center justify-center w-16 h-16 bg-dark text-light rounded-full text-xl font-bold border border-solid border-transparent dark:border-light transition"
                whileHover={{
                    backgroundColor: ["#121212", "#37306B","#66347F","#9E4784","#D27685", "#D27685", "#9E4784", "#66347F", "#37306B",  "#121212"],
                    transition: {duration: 1.5, repeat: Infinity},
                }}>
                    AWP
                </MotionLink>
            </div>
        </>
    );
}
