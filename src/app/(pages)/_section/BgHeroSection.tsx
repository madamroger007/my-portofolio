/* eslint-disable react/no-unescaped-entities */
"use client"

import { CardSpotify } from '@/src/components/elemen/card/CardSpotify'
import CardReviewer from '../../../components/elemen/card/CardReviewer'
import { CardSocialMedia } from '../../../components/elemen/card/CardSocialMedia'
import { IconHero } from '../../../components/elemen/img/Icon'
import { ManRounded } from '../../../components/elemen/img/ManRounded'
import { motion } from 'framer-motion'
import WaveSound from '@/src/components/elemen/shape/WaveSound'

const BgHeroSection = () => {
    return (
        <section className='relative isolate'>
            <div className='relative z-10 grid lg:grid-cols-3 grid-cols-1 w-full'>
                <div className="w-full px-5 grid max-md:gap-5 justify-center ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h3 className='text-3xl font-bubblegum dark:text-gray-300 text-gray-700'>Hy! I'm</h3>
                        <h1 className='text-4xl font-poppins font-bold dark:text-blue-500 text-blue-600'>adam Setiadi</h1>
                    </motion.div>
                    <CardSpotify className='mx-2 max-md:mt-10' />
                    <WaveSound className='w-full' />
                    <div className="flex items-center justify-center ">
                        <CardSocialMedia className='w-full' />
                    </div>
                </div>
                <div className=" flex justify-center max-lg:mt-20">
                    <ManRounded />
                </div>


                <div className="w-full">
                    <div className='flex justify-center  max-lg:pt-10'>
                        <h2 className='font-poppins text-center dark:text-gray-300 text-gray-700'>I am an app developer, gamer, Engineer and designer</h2>
                    </div>

                    <div className="flex items-center justify-center ">
                        <CardReviewer className='mt-20' />
                    </div>
                    <div className='flex justify-center items-start '>
                        <div className='-mt-20 flex items-center flex-col'>
                            <IconHero className='w-[150px] my-2' />
                            <div className='-mt-52 text-center'>
                                <h1 className=' font-poppins font-bold text-2xl uppercase text-black dark:text-white'>Madamroger</h1>
                                <h4 className='text-black dark:text-white'>Full Stack Developer</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </section>
    )
}
export default BgHeroSection
