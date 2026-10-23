"use client"
import ButtonPrimary from '../../../../components/elemen/button/ButtonPrimary'
import { MeImage } from '../../../../components/elemen/img/MeImage'
import TypewriterHook from '../../../../components/elemen/text/TypeWriterHook'
import React from 'react'
import { motion } from 'framer-motion'

const word = ["Hai! Nama saya Adam Setiadi, saat ini saya tinggal di Bandung, Jawa Barat, Indonesia",
    "Saya sedang menempuh pendidikan di Universitas Bale Bandung",
    "Sebagai programmer, perjalanan saya masih terbilang baru. Ketertarikan saya pada dunia pemrograman dan creative design muncul saat masuk kuliah. Sejak saat itu, saya mulai mempelajari dasar-dasar pemrograman melalui channel youtube, beasiswa dan browser. Meskipun masih dalam tahap belajar, saya sudah mulai membangun portofolio dan banyak projek.",
    "Saya sangat antusias untuk terus belajar dan mengembangkan kemampuan saya di bidang pemrograman, creative design, dan teknologi. Saya percaya bahwa dengan tekad dan kerja keras, saya dapat mencapai tujuan saya dan memberikan kontribusi yang berarti di dunia teknologi.",]
const Introduction = () => {
    return (
        <section className='grid md:grid-cols-2 grid-cols-1 max-md:p-5'>
            <div className='md:pl-14 text-wrap'>
                <div className='flex gap-5 items-center mb-10'>
                    <div className='w-20 h-[1px] dark:bg-white bg-gray-500'></div>
                    <p className='font-light italic text-gray-500 dark:text-white'>Tech Enthusiast</p>
                    <div className='w-20 h-[1px] dark:bg-white bg-gray-500'></div>
                </div>
                <h1 className='font-poppins text-3xl font-bold dark:text-gray-300 text-gray-700'>Introducing My Self</h1>
                <div className='py-10'>
                    <TypewriterHook
                        word={word}
                        className="text-gray-700 text-base  font-medium font-notoSerif md:text-lg dark:text-gray-100"
                    />
                </div>
                <ButtonPrimary className='px-10' href={process.env.NEXT_PUBLIC_CV}>View CV</ButtonPrimary>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <MeImage className='gradient-light-to-purple ' />
            </motion.div>
        </section>
    )
}
export default React.memo(Introduction)