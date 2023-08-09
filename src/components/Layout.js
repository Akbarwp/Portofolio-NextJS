import React from "react";

export default function Layout({children, className=""}) {
    return (
        <>
            <div className={`${className} w-full h-full inline-block p-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32 z-0 bg-light dark:bg-dark transition`}>
                {children}
            </div>
        </>
    );
}
