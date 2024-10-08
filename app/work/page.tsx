"use client";

import {easeIn, motion} from 'framer-motion'
import React, {useState} from 'react';

import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper';

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
        image: "/assets/work/hehe2.jpeg",
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Html 5"}, { name: "Css 3"}, { name:"Javascript" }],
        image: "/assets/work/hehe3.jpeg",
        live: "",
        github: "",
    },
    {
        num: '04',
        category: 'frontend',
        title: 'project 4',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus ut eligendi labore explicabo eaque.",
        stack: [{ name: "Html 5"}, { name: "Css 3"}],
        image: "/assets/work/hehe4.jpeg",
        live: "",
        github: "",
    },
];

 const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, }}
                        className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            {/*outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        </div>
                        {/*project category*/}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                        {/*description*/}
                        <p className="text-white/60">{project.description}</p>
                        {/*stack*/}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=> {
                                return (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/*remove the last comma*/}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                )
                            })}
                        </ul>
                        {/*border*/}
                        <div className="border border-white/30"></div>
                        {/*buttons*/}
                        <div className="flex items-center gap-4">
                            {/*live projects button*/}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                             {/*github projects button*/}
                             <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} 
                                slidesPerView={1} 
                                className="xl:h-[520px] mb-12"
                                onSlideChange={handleSlideChange}
                            >
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className=" h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/*overlay*/}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                        </div>
                                        {/*image*/}
                                        <div className='relative w-ful h-full'>
                                            <Image src={project.image} fill className="object-cover" alt="" />
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/*slider buttons*/}
                            <WorkSlideBtns />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
 }

 export default Work;