/* eslint-disable react/no-unescaped-entities */
"use client"

import CardSpotify from '@/src/components/elemen/card/CardSpotify'
import CardReviewer from '../../../components/elemen/card/CardReviewer'
import CardSocialMedia  from '../../../components/elemen/card/CardSocialMedia'
import { ManRounded } from '../../../components/elemen/img/ManRounded'
import { motion } from 'framer-motion'
import WaveSound from '@/src/components/elemen/shape/WaveSound'
import TypeWriterMotion from '@/src/components/elemen/text/TypewriterMotion'
import BrandLogo from '@/src/components/elemen/img/BrandLogo'

const BgHeroSection = () => {
    const box = {
        backgroundColor: "var(--hue-3)",
        borderRadius: 5,
    }
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >

                        <CardSpotify className='mx-2 ' />
                    </motion.div>
                    <motion.div
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                        className="w-full"
                    >

                        <WaveSound className='w-full' />
                    </motion.div>
                    <div className="flex items-center justify-center ">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                        >
                            <CardSocialMedia className='w-full' />
                        </motion.div>
                    </div>
                </div>
                <div className=" flex justify-center max-lg:mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.6 }}
                        style={box}
                    >

                        <ManRounded />
                    </motion.div>
                </div>


                <div className="w-full">
                    <div className='flex justify-center  max-lg:pt-10'>
                        <TypeWriterMotion text="I'm a Full Stack Developer, Gamer and Designer" />
                    </div>

                    <div className="flex items-center justify-center ">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }}
                        >

                            <CardReviewer className='mt-20' />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <BrandLogo />

                    </motion.div>
                </div>
            </div >
        </section>
    )
}
export default BgHeroSection
