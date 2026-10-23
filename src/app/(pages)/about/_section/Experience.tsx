"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { TiFlowChildren } from "react-icons/ti";

import  TitleCard from '../../../../components/elemen/card/TitleCard';
import TitleLiner from '../../../../components/elemen/text/TitleLiner';
import { CardComponentsExpProps } from '../../../../components/elemen/card/CardComponentsExp';
import { Experience as ExperienceType } from '../../../../types/types';

const LayoutCardExperience = dynamic(
  () => import('../../../../components/layout/LayoutCardExperience'),
  { loading: () => <p className="animate-pulse text-sm text-gray-500">Loading...</p> }
);

const MemoizedLayoutCardExperience = React.memo(LayoutCardExperience);

const Experience = ({ items = [] }: { items: ExperienceType[] }) => {
  const { workData, schoolData } = useMemo(() => {
    const mapToCardProps = (item: ExperienceType): CardComponentsExpProps => ({
      name: item.title,
      institution: item.name_institution,
      description: item.description,
      start: item.time_start,
      end: item.time_end,
    });

    return {
      workData: items.filter(item => item.category_name === "Work").map(mapToCardProps),
      schoolData: items.filter(item => item.category_name === "Academic").map(mapToCardProps)
    };
  }, [items]);

  return (
    <div>
      <section className='flex flex-col items-center gap-5'>
        <TitleCard>
          <TiFlowChildren className="w-5 h-5" />
          <h1>Flow</h1>
        </TitleCard>
        <TitleLiner title='Experience' />
      </section>

      <section className='grid md:grid-cols-2 grid-cols-1 max-md:items-center max-md:justify-center px-5 md:px-10 py-10 gap-10'>
        <MemoizedLayoutCardExperience
          key="work-experience"
          items={workData}
          subtitle='Experience'
          name='Work'
          className='card'
        />
        <MemoizedLayoutCardExperience
          key="academic-experience"
          items={schoolData}
          subtitle='Alumni'
          name='Academic'
          className='card'
        />
      </section>
    </div>
  );
};

export default Experience;