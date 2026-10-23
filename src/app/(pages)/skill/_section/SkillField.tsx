/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import TitleLiner from '../../../../components/elemen/text/TitleLiner'
import TitleCard from '../../../../components/elemen/card/TitleCard'
import { FaLink } from "react-icons/fa6";
import clsx from 'clsx'
import Link from 'next/link'
import { Skills } from "../../../../types/types";

import CardSkil from './CardSkil'

const SkillField = ({ items }: { items: Skills[] }) => {
    const [activeTab, setActiveTab] = React.useState("webdev");
    const [item, setItem] = React.useState<Skills[] | []>(items || []);
    const handleTabChange = (value: React.SetStateAction<string>) => {
        setActiveTab(value);
    };

    return (
        <div>
            <section className='flex flex-col items-center gap-5 '>
                <TitleCard >
                    <FaLink />
                    <h1>Portofolio</h1>
                </TitleCard>
                <TitleLiner title='My Skill' />
            </section>

            <Tabs defaultValue={activeTab} className="w-full py-10" onValueChange={handleTabChange}>
                <TabsList className=' bg-transparent w-full'>
                    <section className='max-md:carousel w-full md:flex  md:justify-center md:items-center'>

                        <TabsTrigger value="webdev" className='max-md:carousel-item   mx-5' id="slide1">
                            <div className={clsx('mx-14  ', activeTab === "webdev" ? "" : "blur-sm")}>

                                <img src="/src/img/icon/web.png" alt="app" className='w-full' />
                                <h1>App Development</h1>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="android" className='max-md:carousel-item  mx-5 ' id="slide2">
                            <div className={clsx('mx-14  ', activeTab === "android" ? "" : "blur-sm")}>
                                <img src="/src/img/icon/android.png" alt="a" className='w-full' />
                                <h1>IT Helpdesk</h1>
                            </div>
                        </TabsTrigger>
                        <TabsTrigger value="desain" className='max-md:carousel-item mx-5 ' id="slide3">
                            <div className={clsx('mx-14  ', activeTab === "desain" ? "" : "blur-sm")}>
                                <img src="/src/img/icon/desain.png" alt="a" className='w-full' />
                                <h1>Desain Grafis</h1>
                            </div>

                        </TabsTrigger>
                    </section>
                </TabsList>
                <section className='flex w-full justify-center gap-5 my-16'>
                    <Link href={"#slide1"} className={clsx('w-10 h-2 rounded', activeTab === 'webdev' ? 'bg-blue-700' : 'bg-slate-500')}></Link>
                    <Link href={"#slide2"} className={clsx('w-10 h-2 rounded', activeTab === 'android' ? 'bg-blue-700' : 'bg-slate-500')}></Link>
                    <Link href={"#slide3"} className={clsx('w-10 h-2 rounded', activeTab === 'desain' ? 'bg-blue-700' : 'bg-slate-500')}></Link>
                </section>
                <section className="relative">
                    <TabsContent value="webdev">
                        <CardSkil items={item.filter(i => i.category.title === "Web Development")} />
                    </TabsContent>

                    <TabsContent value="android">
                        <CardSkil items={item.filter(i => i.category.title === "Android Development")} />
                    </TabsContent>

                    <TabsContent value="desain">
                        <CardSkil items={item.filter(i => i.category.title === "Desain Grafis")} />
                    </TabsContent>
                </section>
            </Tabs>
        </div>
    )
}

export default SkillField