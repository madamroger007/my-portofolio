import React from 'react'

const TitleCard = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className='max-w-[150px] flex gap-2 items-center justify-center bg-gradient-to-r from-[#43306B]/50 to-[#835ED1]/50 rounded-xl py-2 px-5 text-white 
        text-xs'>
            {children}

        </div>
    )
}

export default React.memo(TitleCard)