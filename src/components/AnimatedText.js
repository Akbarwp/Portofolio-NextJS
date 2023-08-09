import React from "react";
import {motion} from "framer-motion";

export default function AnimatedText({text, className=""}) {

    const quote = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            }
        }
    }

    const singleWord = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full mx-auto py-0 lg:py-2 text-center overflow-hidden">
                <motion.h1 className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize`} variants={quote} initial="initial" animate="animate">
                    {text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className="inline-block" variants={singleWord}>
                            {word}&nbsp;
                        </motion.span>
                    )}
                </motion.h1>
            </div>
        </>
    );
}
