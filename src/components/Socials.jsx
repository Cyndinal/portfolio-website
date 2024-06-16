'use client'
import React from 'react';
import {LinkedinIcon} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";


const socialList = [
    {name:"Github",icon:"/github-142-svgrepo-com.svg",path:"https:www.github.com/Cydinal"},
     {name:"Whatsapp",icon:"/whatsapp-svgrepo-com.svg",path:"+233 559-372-778"},
    {name:"X",icon:"/twitter-color-svgrepo-com.svg",path:"+233 559-372-778"},
    {name:"Discord",icon:"/discord-icon-svgrepo-com.svg",path:""},
    {name:"Email",icon:"/email-opened-svgrepo-com.svg",path:"Discord.com"},
    {name:"Medium",icon:"/medium-svgrepo-com.svg",path:"Medium.com"},

]


function Socials({containerStyle, iconStyles}) {
    return (
        <div className={containerStyle}>
            {socialList.map((social,index)=>(
                <div key={index} className={'rounded-full  text-accent '}>
                    <Link href={social.path} className={""}/>
                      <TooltipProvider >
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={social.path}>
                              <Image src={social.icon} alt={"SocialIcon"} width={40} height={40} className={'hover:animate-pulse shadow-accent shadow-lg'}/>
                        </Link>

                    </TooltipTrigger>
                    <TooltipContent>
                      <p className={'font-semibold text-secondaryRed'}>
                          {social.name}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </div>



            ))}

        </div>
    );
}

export default Socials;