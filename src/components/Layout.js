import React from "react";

export default function Layout({children, className=""}) {
    return (
        <>
            <div className={`${className} w-full h-full inline-block p-32 z-0 bg-light dark:bg-dark transition`}>
                {children}
            </div>
        </>
    );
}
