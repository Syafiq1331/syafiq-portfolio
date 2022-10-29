import React from 'react'

export default function ContactItem({ label, value, icon, className }) {
    const addClassName = className ? `${className}` : "";

    return (
        <div className={`flex items-start ${addClassName}`}>
            <img src={icon} className="w-8" />
            <div className='ml-4'>
                <div className="text-sm font-bold mb-1 ">{label} </div>
                <div className="text-lg text-slate-900/80">{value}</div>
            </div>
        </div>
    )
}
