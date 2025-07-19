import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  GithubIcon,
  Linkedin02Icon,
  LeetcodeIcon,
  DiscordIcon,
} from '@hugeicons/core-free-icons'

function SocialIcon(){

const socialIcons = [
    {
      icon: GithubIcon,
      iconColor: "white",
      href: "https://github.com/Diksha8-db",
    },
    {
      icon: InstagramIcon,
      iconColor: "#F6506F",
      href: "https://github.com/Diksha8-db",
    },
    {
      icon: Linkedin02Icon,
      iconColor: "#3781EF",
      href: "https://www.linkedin.com/in/diksha-bharti-055499326/",
    },
    {
      icon: DiscordIcon,
      iconColor: "white",
      href: "",
    },
    {
      icon: LeetcodeIcon,
      iconColor: "orange",
      href: "https://leetcode.com/u/DikshaBharti8/",
    },
  ];


  return(
    <div className="flex flex-wrap justify-center flex-row gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  className="border-none outline-none bg-gray-900 px-2 py-2 rounded-lg hover:opacity-60"
                >
                  <HugeiconsIcon
                    icon={icon.icon}
                    size={30}
                    strokeWidth={2}
                    color={icon.iconColor}
                  />
                </a>
              ))}
            </div>
  )
}

export default SocialIcon