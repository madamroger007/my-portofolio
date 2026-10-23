import React from 'react'
import TitleLiner from '../text/TitleLiner'
import { TbMoodEmpty } from "react-icons/tb";
const CardIsEmpty = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col w-full items-center justify-center gap-5 px-5'>
                <TitleLiner title={'Coming Soon'} />
                <TbMoodEmpty className='text-4xl text-blue-400 grayscale hover:grayscale-0' />
            </div>
        </div>
    )
}

export default React.memo(CardIsEmpty)