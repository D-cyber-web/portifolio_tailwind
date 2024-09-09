"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { title } from "process"
import { Description } from "@radix-ui/react-dialog"
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer"

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel ex quam et, nemo itaque facilis atque.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel ex quam et, nemo itaque facilis atque.",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel ex quam et, nemo itaque facilis atque.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel ex quam et, nemo itaque facilis atque.",
        href: ""
    },
]

import { motion } from "framer-motion"
import { serialize } from "v8"

 const Services = () => {
    return (
        <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0"> 
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0 }} 
                    animate={{
                        opacity: 1, 
                        transition:{delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }} >
                    {services.map((service, index) => {
                        return (
                            <div key={index}>
                                {/* top */}
                                <div>
                                    <div>{service.num}</div>
                                    <Link href={service.href}></Link>
                                    <BsArrowDownRight />
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
 }

 export default Services;