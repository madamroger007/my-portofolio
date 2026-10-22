import { Icons } from "../types/types";
import { Experience, Project } from "../types/types";

export const icon = {
  "c-sharp": "/src/img/icon programming/c-sharp.png",
  idea: "/src/img/icon programming/idea.png",
  java: "/src/img/icon programming/java.png",
  nodejs: "/src/img/icon programming/nodejs.png",
  nuclear: "/src/img/icon programming/nuclear.png",
  php: "/src/img/icon programming/php.png",
  postgre: "/src/img/icon programming/postgre.png",
  programming: "/src/img/icon programming/programming.png",
  python: "/src/img/icon programming/python.png",
  typescript: "/src/img/icon programming/typescript.png",
  "visual-basic": "/src/img/icon programming/visual-basic.png",
};

export const PropsDataExpwork: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    name_institution: "PT. ABC Technology",
    description: "Developed and maintained web applications using React and Node.js.",
    time_start: "2020-01-01",
    time_end: "2022-12-31",
    category_id: "1",
    createdAt: "2020-01-01",
    updatedAt: "2022-12-31",
    category_name: "Work",
  },
  {
    id: "2",
    title: "Frontend Developer",
    name_institution: "XYZ Solutions",
    description: "Implemented responsive UI components and optimized performance.",
    time_start: "2018-06-01",
    time_end: "2019-12-31",
    category_id: "1",
    createdAt: "2018-06-01",
    updatedAt: "2019-12-31",
    category_name: "Work",
  },
];

export const PropsDataProject: Project[] = [
  {
    id: "1",
    title: "Project 1",
    url: "https://example.com/project1",
    imgUrl: "https://res.cloudinary.com/dqg6nsz40/image/upload/v1771893609/portfolio/la2b26eizolbfijaytbk.jpg",

    publicId: "project1",
    description: "This is the first project.",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    category: {
      id: "1",
      title: "Application",
      subtitle: "Application",
    },
    icons: [
      {
        id: "1",
        name: "React",
        url: icon.idea,
      },
      {
        id: "2",
        name: "TypeScript",
        url: icon.typescript,
      },
    ],
  },
  {
    id: "2",
    title: "Project 2",
    url: "https://example.com/project2",
    imgUrl: "https://res.cloudinary.com/dqg6nsz40/image/upload/v1771893609/portfolio/la2b26eizolbfijaytbk.jpg",
    publicId: "project2",
    description: "This is the second project.",
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    category: {
      id: "1",
      title: "Application",
      subtitle: "Application",
    },
    icons: [
      {
        id: "1",
        name: "Vue.js",
        url: icon["c-sharp"],
      },
      {
        id: "2",
        name: "JavaScript",
        url: icon.nuclear,
      },
    ],
  },

];
