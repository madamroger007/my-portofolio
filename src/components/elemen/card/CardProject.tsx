/* eslint-disable @next/next/no-img-element */
// import { IconProject, ProjectItem } from '@/lib/data.d'
import { Project, Icons } from '../../../types/types';
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { ArrowUpRight, CalendarDays, Github, Layers3, Tag } from "lucide-react";
import TooltipComponent from '../TooltipComponent'
import { motion } from 'framer-motion';
import { formatYear, getIconName } from '@/src/utils/DateTime';
import {
  Card,
} from "@/components/ui/card"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};


const CardProject = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    variants={fadeUp}
    transition={{ duration: 0.42, delay: index * 0.06 }}
    whileHover={{ y: -7 }}
    className="group relative min-w-0 overflow-hidden rounded-[30px]  p-px shadow-[2px_12px_30px_rgba(15,23,42,0.14)] transition dark:from-white/18 dark:via-cyan-200/10 dark:to-white/5 dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
  >
    <Card className="relative max-w-sm flex flex-col overflow-hidden rounded-[29px] border border-white/50 bg-white/82 p-2.5 backdrop-blur dark:border-white/10 dark:bg-gray-900">
      <div className="relative aspect-video overflow-hidden rounded-[24px] bg-slate-200 ring-1 ring-slate-950/5 dark:bg-slate-950 dark:ring-white/10">
        <Image
          src={project.imgUrl}
          alt={`${project.title} project thumbnail`}
          fill
          className="saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78)),radial-gradient(circle_at_70%_22%,rgba(34,211,238,0.24),transparent_24%)]" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            <CalendarDays className="size-3.5" />
            {formatYear(project.createdAt)}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            <Tag className="size-3.5" />
            {project.category?.subtitle ?? project.category?.title ?? "Project"}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
        <h3 className="font-poppins text-2xl font-extrabold leading-tight text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-gray-400 dark:text-white/58 truncate ... hover:overflow-visible hover:text-wrap">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(project.icons ?? []).map((icon, iconIndex) => {
            return (
              <TooltipComponent key={iconIndex} tooltip={icon.name}>
                <img src={icon.url} alt="" className="badge bg-transparent  border-transparent  grayscale hover:grayscale-0 " />
              </TooltipComponent>

            );
          })}
        </div>


        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-400/10 px-4 py-3 font-poppins text-sm font-extrabold text-cyan-700 shadow-[inset_-24px_0_0_rgba(255,255,255,0.38)] transition hover:bg-cyan-400/20 dark:border-cyan-300 dark:text-cyan-200 dark:shadow-[inset_-24px_0_0_rgba(10,10,10,0.35)]"
          >
            View Project
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300/80 bg-white/60 px-4 py-3 font-poppins text-sm font-extrabold text-slate-700 transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/15 dark:bg-black/20 dark:text-white/78 dark:hover:text-cyan-200"
          >
            <Github className="size-4" />
            <span className="sm:hidden lg:inline">GitHub</span>
          </Link>
        </div>
      </div>
    </Card>
  </motion.article>
);


export default CardProject


