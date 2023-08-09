import Link from "next/link";
import React from "react";
import Layout from "./Layout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg">
            <Layout className="flex flex-col md:flex-row items-center justify-between gap-y-3 lg:gap-y-0 py-4 md:py-8 lg:py-8 xl:py-8 2xl:py-8 text-sm lg:text-base">
                <span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
                <div>
                    Build with <span className="text-primary dark:text-primaryDark px-1">❤</span> by <Link href="https://github.com/Akbarwp" target={"_blank"} className="underline underline-offset-2">AkbarWP</Link>
                </div>
                <Link href="https://akbarwp.github.io/Portofolio-TailwindCSS/" target={"_blank"} className="underline underline-offset-2">Another Portofolio</Link>
            </Layout>
        </footer>
    );
}
