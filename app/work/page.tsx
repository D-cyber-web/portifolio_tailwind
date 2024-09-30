"use client";

import {motion} from 'framer-motion'
import React, {useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Html 5"}, { name: "Css 3"}, { name:"Laravel" }],
        image: "/assets/work/hehe1.png",
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Next.js"}, { name: "Tailwind.css"}, { name:"Node.js" }],
        image: "/assets/work/hehe2.png",
        live: "",
        github: "",
    },
    {
        num: '01',
        category: 'frontend',
        title: 'project 3',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Html 5"}, { name: "Css 3"}, { name:"Javascript" }],
        image: "/assets/work/hehe3.png",
        live: "",
        github: "",
    },
    {
        num: '01',
        category: 'frontend',
        title: 'project 4',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Html 5"}, { name: "Css 3"}],
        image: "/assets/work/hehe4.png",
        live: "",
        github: "",
    },
];

 const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return (
        <motion.section initial={{opacity: 0}}>
            <div className="container mx-auto">
                project
            </div>
        </motion.section>
    )
 }

 export default Work;