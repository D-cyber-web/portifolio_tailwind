"use client";

import { Icon } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path:""},
    {icon: <FaLinkedinIn />, path:""},
    {icon: <FaYoutube />, path:""},
    {icon: <FaTwitter />, path:""},
]
interface SocialProps {
  containerStyles?: string; // Optional styles
  iconStyles?: string;      // Optional styles
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;