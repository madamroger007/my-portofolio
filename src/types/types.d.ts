import React from "react"
interface Card {
  className?: string
}
interface Children {
  children: React.ReactNode
}

type Experience = {
  id: string;
  title: string;
  name_institution: string;
  description: string | null;
  time_start: string;
  time_end: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  category_name: string | null;
}


type Certification = {
  id: string;
  title: string;
  link_cert: string;
  name_institution: string;
  time_cert: string;
  createdAt: string;
  updatedAt: string;
}

export type Skills = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    title: string;
  };
  icons: Icons[]
};

export type Icons = {
  id: string;
  name: string;
  url: string;
}

export type Project = {
  id: string?;
  title: string;
  url: string
  imgUrl: string;
  publicId: string?;
  description: string;
  createdAt: string?;
  updatedAt: string?;
  category: {
    id: string;
    title: string;
    subtitle: string;
  } | undefined;
  icons: Icons[]
}
