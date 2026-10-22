import LayoutComponent from '../../../components/layout/layout'
import Introduction from './_section/Introduction'
import { Metadata } from 'next'
import Experience from './_section/Experience'
import Certification from './_section/Certification'
import { getCertification, getExperience } from '../../../lib/api'
import React from 'react'
import { SkeletonCardGrid } from '@/src/components/elemen/loading/Skeleton-card'
export const metadata: Metadata = {
  title: "about"
}
async function page() {
  const dataExperience = await getExperience()
  const dataCertification = await getCertification()

  return (
    <>
      <LayoutComponent>
        <section className="w-full pt-14 pb-52 flex flex-col gap-52">
          <Introduction />
          <React.Suspense fallback={<SkeletonCardGrid count={6} />}>
            <Experience items={dataExperience} />
          </React.Suspense>
          <React.Suspense fallback={<SkeletonCardGrid count={6} />}>
            <Certification items={dataCertification} />
          </React.Suspense>
        </section>
      </LayoutComponent>
    </>
  )
}

export default page