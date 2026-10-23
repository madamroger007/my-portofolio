import React from 'react'
import CardComponentsExp, { CardComponentsExpProps } from '../elemen/card/CardComponentsExp'
import { motion } from 'framer-motion'
const LayoutCardExperience = ({ name, subtitle, className, items }: { items: CardComponentsExpProps[], name: string, subtitle: string, className?: string, }) => {
  return (
    <div className='w-full'>
      <div className='text-center'>
        <h1 className='font-extrabold font-raleway dark:text-gray-300 text-gray-700 text-xl'>{name}</h1>
        <p className='font-raleway dark:text-gray-300 text-gray-700'>{subtitle}</p>
      </div>
      <div className='grid gap-8 mt-10'>
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <CardComponentsExp className={className} key={item.name} start={item.start} end={item.end} name={item.name} institution={item.institution} description={item.description} />
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default LayoutCardExperience