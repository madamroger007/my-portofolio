import { IconHero } from "./Icon";

export default function BrandLogo() {
    return (
        <div className='flex justify-center items-start '>
            <div className='-mt-20 flex items-center flex-col'>
                <IconHero className='w-[150px] my-2' />
                <div className='-mt-52 text-center'>
                    <h1 className=' font-poppins font-bold text-2xl uppercase text-black dark:text-white'>Madamroger</h1>
                    <h4 className='text-black dark:text-white'>Full Stack Developer</h4>
                </div>
            </div>

        </div>
    )
}