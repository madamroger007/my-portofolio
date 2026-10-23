"use client"
import CardSertification from '../../../../components/elemen/card/CardSertification'
import TitleCard from '../../../../components/elemen/card/TitleCard'
import TitleLiner from '../../../../components/elemen/text/TitleLiner'
import React from 'react'
import { TiFlowChildren } from 'react-icons/ti'
import { Certification as CertificationType } from '../../../../types/types'
import { motion } from 'framer-motion'
const Certification = ({ items }: { items: CertificationType[] }) => {
  const [dataCertification, setDataCertification] = React.useState<CertificationType[] | []>(items || []);

  return (
    <div>
      <section className='flex flex-col items-center gap-5 '>
        <TitleCard >
          <TiFlowChildren />
          <h1>Flow</h1>
        </TitleCard>
        <TitleLiner title='Certifications' />
      </section>
      <section className='grid md:grid-cols-2 grid-cols-1 px-5 md:px-10 py-10 gap-10'>
        {dataCertification.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.7 }}
            >
              <CardSertification className='hover:bg-black/10 dark:hover:bg-slate-100/20' key={item.id} name={item.title} date={item.time_cert} name_company={item.name_institution} created_at={item.createdAt} updated_at={item.updatedAt} url={item.link_cert} />
            </motion.div>
          </React.Fragment>
        ))}

      </section>
    </div>
  )
}

export default React.memo(Certification)