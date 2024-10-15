"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
         icon: <FaPhoneAlt />,
         title: "Phone",
         description: "(+254) 768 284 075",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "muthama3david@gmail.com",
   },
   {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Code Corner, Tech town 20303",
    },
]

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, }}
                        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*form*/}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-6xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60 text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate laboriosam fuga, tempore consectetur eum nisi consequatur voluptatem necessitatibus esse tempora quaerat, excepturi illo modi similique vel molestiae! Explicabo, at.
                            </p>
                            {/*input*/}
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>
                            {/*select*/}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cs">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    Active
                    {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                     info
                    </div>
                </div>
            </div>
        </motion.section>
    )
 }

export default Contact;