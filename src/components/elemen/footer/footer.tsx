"use client"
import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (

        <footer className="footer p-10 shadow-top">
            <nav className='dark:text-gray-300 text-gray-700'>
                <h6 className="font-poppins font-semibold text-xl mb-3">Get in Touch</h6>


                <div className="link link-hover flex flex-row gap-5">
                    <div className='rounded-full border w-8 h-8 dark:border-white border-slate-600 flex justify-center items-center'>

                        <FaEnvelope />
                    </div>
                    <a href='mailto:adamsetiadijr07@gmail.com' className='text-start no-underline'>
                        <h1>Email</h1>
                        <p>adamsetiadijr07@gmail.com</p>
                    </a>
                </div>
                <a className="link link-hover flex flex-row gap-5">
                    <div className='rounded-full border w-8 h-8 dark:border-white border-slate-600 flex justify-center items-center'>

                        <FaLocationDot />
                    </div>
                    <div className='text-start'>
                        <h1>Address</h1>
                        <p> West Java, Indonesia</p>
                    </div>
                </a>
            </nav>

            <nav className='w-full flex  md:justify-end items-center justify-center h-full max-md:pt-20'>
                <svg className='max-w-[380px] ' viewBox="0 0 409 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M331.085 8.65953C289.339 10.9315 226.682 43.1748 250.461 110.959C274.24 178.744 219.83 189.62 189.652 186.585"
                        className='dark:stroke-slate-100 stroke-black' />
                    <path d="M145.741 185.136C145.741 187.608 147.128 189.891 149.46 191.576C151.792 193.26 155.038 194.317 158.646 194.317C162.255 194.317 165.501 193.26 167.833 191.576C170.165 189.891 171.552 187.608 171.552 185.136C171.552 182.663 170.165 180.38 167.833 178.696C165.501 177.012 162.255 175.955 158.646 175.955C155.038 175.955 151.792 177.012 149.46 178.696C147.128 180.38 145.741 182.663 145.741 185.136Z"
                        className='dark:stroke-slate-100 stroke-black' />
                    <path d="M125.743 185.136C92.4333 182.936 26.0576 193.585 27.0326 253.782" className='dark:stroke-slate-100 stroke-black' />
                    <path d="M234.812 150.812C235.218 159.76 226.647 176.863 189.113 173.695" className='dark:stroke-slate-100 stroke-black' />
                    <path d="M33.0321 76.8218C31.8018 77.3348 31.8018 79.0778 33.0321 79.5908L65.1939 93.0006C66.182 93.4126 67.2712 92.6867 67.2712 91.6162L67.2712 64.7964C67.2712 63.7259 66.182 63 65.1939 63.412L33.0321 76.8218Z"
                        className='dark:stroke-slate-100 stroke-black' strokeWidth="3" />
                    <path d="M7.05557 40.256C5.00503 41.1109 5.00503 44.0159 7.05557 44.8709L27.3356 53.3266C28.9824 54.0132 30.7977 52.8034 30.7977 51.0192L30.7977 34.1077C30.7977 32.3235 28.9824 31.1136 27.3356 31.8002L7.05557 40.256Z"
                        className='dark:stroke-slate-100 stroke-black' />
                </svg>
            </nav>
        </footer>

    )
}

export default React.memo(Footer)