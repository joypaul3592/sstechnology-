import React from 'react'

export default function TitleBox({ tag, title1, title2 }) {
    return (
        <div data-aos="fade-in" className=" text-center group">
            <p className=" text-primary text-xl font-medium border border-light inline-block px-5 skew-y-6 mb-3 transition-all ease-linear duration-300 group-hover:border-amber-300">{tag}</p>
            <h1 data-aos="zoom-in" className=" lg:w-8/12 mx-auto lg:text-5xl sm:text-4xl text-3xl text-white  my-4 " >{title1}<span className="text-primary">,</span> {title2}</h1>
            <div data-aos="zoom-out" className=" h-[2px] bg-primary mt-1.5 w-2/6 mx-auto"></div>
        </div>
    )
}
