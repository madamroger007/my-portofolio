/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import Img from 'next/image'
export const ManRounded = () => {

  return (

    <div className='shadow-lg dark:shadow-blue-600 shadow-slate-500 rounded-full md:w-[360px] md:h-[360px] w-[350px] h-[350px] p-12  '>
      <Img src="/src/img/bg/man-removebg-preview.png" alt="" width={400} height={400} />
    </div>
  )
}
