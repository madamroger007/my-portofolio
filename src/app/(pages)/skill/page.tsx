import LayoutComponent from '../../../components/layout/layout'
import React from 'react'
import SkillField from './_section/SkillField'
import { getSkills } from '../../../lib/api'

async function page() {
  const data = await getSkills();
  return (
    <LayoutComponent>
      <section className='w-full pt-14 pb-52'>
        <SkillField items={data} />
      </section>
    </LayoutComponent>
  )
}

export default page