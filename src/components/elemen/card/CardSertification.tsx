import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { formatDate } from '../../../utils/DateTime';
interface CardSertificationProps {
  name: string;
  name_company: string;
  date: string;
  url: string;
  created_at: string;
  updated_at: string
  className?: string;
}
const CardSertification: React.FC<CardSertificationProps> = ({ name, name_company, url, updated_at, date, className }) => {
  return (
    <Link href={url}>
      <div className={'relative border dark:border-blue-600 border-slate-400  p-5 rounded-2xl grid gap-4  ' + className}>
        <h1 className='dark:text-gray-300 text-gray-700 font-raleway whitespace-normal  font-bold break-words break-all'>{name}</h1>
        <div className='flex items-center gap-2'>
          <HiOutlineBuildingOffice2 />
          <p className='dark:text-gray-300 text-gray-700 font-semibold'>{name_company}</p>
        </div>


        <FaExternalLinkAlt className='absolute top-3 right-3' />
        <div className='flex justify-between'>
          <span className=' text-blue-600'>{formatDate(updated_at)}</span>
          <span className=' text-blue-400'>{formatDate(date)}</span>
        </div>
      </div>
    </Link>
  )
}

export default React.memo(CardSertification)