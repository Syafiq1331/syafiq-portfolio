import React from 'react'

export default function Button({ className, variant, children, pill }) {
    const addClassName = className ? `${className}` : "";
    const variants = {
        "outline-yellow": `border border-yellow-500 hover:text-black hover:bg-yellow-500 text-yellow-500`,
        "yellow": "bg-yellow-500 hover:bg-yellow-600  text-black",
        "black": "bg-black hover:bg-opacity-90 text-white"
    }

    const pickedVariant = variants[variant]

    return (
        <a className={
            ` transition py-2 px-10 font-semibold text-lg ${pill ? "rounded-full" : ""} inline-block ${pickedVariant} ${addClassName}`
        }>
            {children}
        </a>
    )
}
