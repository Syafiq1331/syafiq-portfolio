import React from 'react'

export default function ProjectItem({ name, description, image }) {
    return (
        <div>
            <article className="text-center">
                <picture>
                    <img src={image} className='w-full rounded-lg' />
                </picture>
                <h3 className='text-xl text-slate-800/90 font-semibold mt-4 mb-1'>{name}</h3>
                <p className='text-lg text-gray-400'>{description}</p>
            </article>
        </div>
    )
}
