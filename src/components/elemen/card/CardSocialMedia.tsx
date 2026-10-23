import { Card } from '../../../types/types';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const CardSocialMedia: React.FC<Card> = ({ className }) => {
  return (

    <ul className={'icon-home flex gap-8 justify-center ' + className}>
      <li><Link href={"https://www.facebook.com/adam.setiadi.583"} target='_blank'><FaFacebook className='w-6 h-6' /></Link></li>
      <li><Link href={"https://www.instagram.com/adamstdi._/"} target='_blank'><FaInstagram className='w-6 h-6' /></Link></li>
      <li><Link href={"https://github.com/madamroger007"} target='_blank'><FaGithub className='w-6 h-6' /></Link></li>
      <li><Link href={"https://www.linkedin.com/in/adamstdi"} target='_blank'><FaLinkedin className='w-6 h-6' /></Link></li>
    </ul>
  )
}

export default React.memo(CardSocialMedia)