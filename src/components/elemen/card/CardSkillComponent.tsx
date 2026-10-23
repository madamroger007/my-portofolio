import { Icons } from "../../../types/types";

import { cn } from '../../../lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import TooltipComponent from '../TooltipComponent';
interface Props {
    items: Icons;
    className?: string
}
const CardSkillComponent: React.FC<Props> = ({ items, className }) => {
    return (

        <TooltipComponent tooltip={items.name}>
            <Link href={items.url} className={cn("p-2", className)} target='_blank'>
                <Image loading="eager" src={items.url} width={50} height={50} alt={items.name} className='w-auto grayscale hover:grayscale-0 ' />
            </Link>
        </TooltipComponent>

    )
}

export default React.memo(CardSkillComponent)
