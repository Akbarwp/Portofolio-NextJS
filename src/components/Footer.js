import Link from "next/link";
import React from "react";
import Layout from "./Layout";

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg">
            <Layout className="flex items-center justify-between py-8">
                <span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
                <div>
                    Build with <span className="text-primary dark:text-primaryDark px-1">❤</span> by <Link href="https://github.com/Akbarwp" target={"_blank"} className="underline underline-offset-2">AkbarWP</Link>
                </div>
                <Link href="https://akbarwp.github.io/Portofolio-TailwindCSS/" target={"_blank"} className="underline underline-offset-2">Another Portofolio</Link>
            </Layout>
        </footer>
    );
}
