import React from 'react';
import {AppleIcon, ArrowDownCircle, ArrowDownRight, PictureInPicture2Icon} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"

const services = [
    {title:"Frontend Development",number:"01",
        description:"This is my first web project you can check it out on my Github page"
        ,icon:<ArrowDownRight/>},
    {title:"Backend Development",number:"02",
        description:"This is my first web project you can check it out on my Github page"
        ,icon:<ArrowDownRight/>},
    {title:"SEO",number:"03",
        description:"This is my first web project you can check it out on my Github page"
            ,icon:<ArrowDownRight/>},

    {title:"UI/UX Design",number:"04",
        description:"This is my first web project you can check it out on my Github page"
        ,icon:<ArrowDownRight/>},
    {title:"API Development",number:"05",
        description:"This is my first web project you can check it out on my Github page"
        ,icon:<AppleIcon/>},{title:"LOGO Design",number:"06",
        description:"This is my first web project you can check it out on my Github page"
        ,icon:<PictureInPicture2Icon/>}
]

function Page() {
    return (
        <div>
            <h1 className={'z-30 container mt-5 flex items-center justify-center mx-auto text-3xl font-semibold border-b-4 border-secondaryDark bg-secondaryDark p-3 fixed'}>Service </h1>
            {/*<ScrollArea className={'h-[440px] rounded-md border border-secondaryFade fill-secondaryFade'}>*/}

            <section
                className={'grid-cols-1 grid md:grid-cols-2 gap-2  md:items-center md:justify-between  md:mx-auto p-20'}>
                {services.map((item, index) => (
                    <div key={index} className={"bg-secondary container rounded-md"}>

                        <div className={'flex justify-between '}>
                            <div className={'text-5xl font-extrabold text-accent hover:animate-bounce hover:rotate-12'}>{item.number}</div>
                            <div className={'w-[30px] h-[30px] outline-none text-accent text-4xl hover:rotate-45 bg-secondary  rounded-full relative'}>{item.icon}</div>
                        </div>
                        <h3 className={'font-bold  text-3xl hover:text-accent'}>{item.title}</h3>
                        <p className={'container leading-7'}>{item.description}</p>

                    </div>
                ))}
            </section>
                 {/*</ScrollArea>*/}

        </div>
    );
}

export default Page;