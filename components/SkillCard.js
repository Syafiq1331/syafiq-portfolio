import React from 'react'

export default function SkillCard({ name, level, image, imageClassName }) {
    const addClassName = imageClassName ? `${imageClassName}` : "";

    return (
        <>
            <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
                <img src={image} alt="" className={`${addClassName} mr-6`} />
                <div>
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
                </div>
            </div>
        </>
    )
}
