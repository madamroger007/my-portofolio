/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic';
import TitleCard from '../../../../components/elemen/card/TitleCard';
import TitleLiner from '../../../../components/elemen/text/TitleLiner';
import React from 'react';
import { FaLink } from 'react-icons/fa';

const FormContactComponent = dynamic(() => import('../../../../components/elemen/form/FormContactComponent'), { loading: () => <p>Loading...</p> });

const FormAction = () => {
    return (
        <div>
            <section className='flex flex-col items-center gap-5 '>
                <TitleCard >
                    <FaLink />
                    <h1>Portofolio</h1>
                </TitleCard>
                <TitleLiner title='My Contact' />
            </section>
            <div className='grid md:grid-cols-2 grid-cols-1 py-10 gap-5'>
                <FormContactComponent className='flex flex-col justify-center px-20 ' />
                <div className='font-sora p-10'>
                    <h2 className='text-4xl font-extrabold'>Let's <span className='text-white' style={{ textShadow: '0 0 8px  #000' }}>talk</span> for</h2>
                    <h2 className='text-4xl font-extrabold'>Something Spesial</h2>
                    <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default FormAction