import  CardIsEmpty from '../../../../components/elemen/card/CardIsEmpty'
import CardSkillComponent from '../../../../components/elemen/card/CardSkillComponent'
import TitleLiner from '../../../../components/elemen/text/TitleLiner'
import { Skills } from '../../../../types/types'
import React from 'react'


const CardSkil = ({ items }: { items: Skills[] }) => {
    return (
        <div className='w-full grid gap-28 '>
            {items.length > 0 ? items.map((item) => (
                <div key={item.title} className='flex flex-col w-full items-center justify-center gap-5 px-5'>
                    <TitleLiner title={item.title} />
                    <div className='flex md:gap-8 gap-5 justify-start items-center flex-wrap'>
                        {item.icons.length === 0 ? <>UnAvailable</> : item.icons.map((tech, index) => (
                            <React.Fragment key={index}>
                                {tech.name === "" || tech.url === "" ? (<div></div>) : (
                                    <CardSkillComponent key={index} items={tech} className='' />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )) : (<CardIsEmpty/>)}
        </div>
    )
}
export default CardSkil