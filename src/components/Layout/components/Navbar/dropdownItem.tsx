import React from 'react'

export default ({title, children}) => {
    return (
        <div className="px-2 group h-full flex items-center">
            <span className="cursor-pointer">{title}</span>
            <svg className="ml-1 w-6 transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="hidden group-hover:block z-50 w-full absolute bg-red-100 left-0 top-14 h-80 p-4">
                {children}
            </div>
        </div>
    )
}
