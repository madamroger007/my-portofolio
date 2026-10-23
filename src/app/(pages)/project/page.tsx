import LayoutComponent from '../../../components/layout/layout'
import { Suspense } from 'react'
import ProjectCardSection from './_section/ProjectCardSection'
import PaginationControls from '../../../components/elemen/pagination/PaginationControls'
import { getProject } from '../../../lib/api'
import { SkeletonCardGrid } from '@/src/components/elemen/loading/Skeleton-card'

type PageProps = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined
  }>
}


export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const getDataProject = await getProject();

  const page = params['page'] ?? '1'
  const per_page = params['per_page'] ?? '5'

  const start = (Number(page) - 1) * Number(per_page)

  const end = start + Number(per_page)

  const entries = getDataProject.slice(start, end)

  const itemproject = getDataProject.map(item => item)
  return (
    <LayoutComponent>
      <section className="w-full pt-14 pb-52 flex flex-col gap-52">
        <Suspense fallback={<SkeletonCardGrid count={6} />}>
          <ProjectCardSection items={entries} key={entries.map((item) => item.id).join('-')} />
        </Suspense>
        <PaginationControls
          hasNextPage={end < itemproject.length}
          hasPrevPage={start > 0}
        />
      </section>
    </LayoutComponent>
  )
}

