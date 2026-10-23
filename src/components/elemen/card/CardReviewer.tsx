"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import { icon } from '../../../lib/dummy-data'
import { Card } from '../../../types/types'

const CardReviewer: React.FC<Card> = ({ className }) => {
  return (


    <section className={'relative pt-10 ' + className} >
      <div
        className="absolute top-2 left-1/2 h-55 w-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-[5px_2px_8px_rgba(15,23,42,0.42)] transition-all duration-700 dark:drop-shadow-[5px_5px_8px_rgba(130,93,225,0.70)]"
      />
      <div className={'mt-10 p-5 grid grid-cols-2  shadow-lg dark:shadow-blue-600 shadow-slate-400 transition-colors duration-1000  max-w-[320px] bg-white dark:bg-gray-900'}>
        <h6 className='font-poppins mb-5 text-[14px] dark:text-gray-300 text-gray-700'>Program Language</h6>
        <div className='ml-7 mb-5  text-[14px]'>⭐⭐⭐⭐⭐</div>
        <div className='flex '>
          {Object.entries(icon).slice(0, 7).map(([key, value]) => (
            <div className='rounded-full shadow-sm shadow-slate-700 -ml-2 bg-white dark:bg-gray-200' key={key}>

              <img src={value} alt={key} className='w-7 h-7 ' />
            </div>
          ))}
        </div>
        <div className='ml-7'><h1 className='dark:text-gray-300 text-gray-700'>4.9</h1></div>
      </div>
    </section>
  )
}
export default React.memo(CardReviewer)
