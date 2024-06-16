'use client'

import {useState} from "react";
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/react";
import {
    ArrowBigDownDash,
    ArrowDownLeftIcon, ArrowUpRight,
    BedSingleIcon,
    FastForwardIcon,
    GithubIcon,
    PersonStandingIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects=[
     {num:'01',category:"Frontend Project", title:"Project1",
        description:"Lorem ipsum notre uipo nore daf fbsfuaolfjnspuhdf udfbqeruehriu df",
        stack:[{name:"React"},{name:"HTML 5"},{name:"CSS 3"},{name:"JavaScript"}],github:"",live:""
    },
    {num:'02',category:"Backend Project", title:"Project2",
        description:"Lorem ipsum notre uipo nore daf fbsfuaolfjnspuhdf udfbqeruehriu df",
        stack:[{name:"Node"},{name:"MongoDB"},{name:"Express"},{name:"GraphQL"}],github:"",live:""
    },
]


function Page() {
    const [project,setProject]= useState(projects[0])

    const handleSlideChange = (swiper)=>{
        const currentIndex =swiper.activeIndex
        setProject(project[currentIndex])

    }
    return (
        <section className={'md:flex container md:justify-between flex-1  space-y-4 p-20 '}>

            <div className={''}>
            <Image src={'/img1.jpg'} alt={'Slider Image'} width={2000} height={250} className={''}/>

                {/*SWIPER SWIPER WIPER SWIPERjkngj bjbndolkbnn dij bdsoinpsjiu ts gnsiudjlknskdj bsdfd*/}


                {/*<Swiper spaceBetween={10}*/}
                {/*        slidePerView={1}*/}
                {/*        onChange={handleSlideChange}*/}
                {/*        className={'h-[520px]'}*/}
                {/*>*/}
                {/*    {projects.map((slide,index)=>(*/}
                {/*        <SwiperSlide key={index}></SwiperSlide>*/}
                {/*    ))}*/}

                {/*</Swiper>*/}

            </div>


            <div className={'flex flex-col  text-center  mx-auto md:order-2'}>
                <p className={'text-5xl font-extrabold text-secondaryRed'}>{project.num}</p>
                <div className={'text-3xl font-semibold'}>{project.category}</div>

                <p className={'text-balance text-sm relative'}>
                    Lorem Ipsum notre numwe sj jbnair a cyto  Lorem Ipsum notre numwe sj jbnair a cyto
                    Lorem Ipsum notre numwe sj jbnair a cyto  Lorem Ipsum notre numwe sj jbnair a cyto
                    Lorem Ipsum notre numwe sj jbnair a cyto  Lorem Ipsum notre numwe sj jbnair a cyto
                    Lorem Ipsum notre numwe sj jbnair a cyto  Lorem Ipsum notre numwe sj jbnair a cyto
                    Lorem Ipsum notre numwe sj jbnair a cyto  Lorem Ipsum notre numwe sj jbnair a cyto

                </p>
                <div>
                    {project.stack.map((st, index) => (
                    <div key={index}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <p className={'text-accent font-semibold'}>
                                        {st.name}
                                        {index !== project.stack.length && ""}
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className={'text-secondaryRed'}>
                                        {st.name}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))}</div>

                <div className={'flex justify-center p-5 gap-4  '}>
                     <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <p className={''}>
                                        <ArrowUpRight className={'bg-secondary text-6xl  border rounded-full fill-secondaryFade'}/>
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className={'text-xs'}>
                                        Hosted Link
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                     <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={'w-[42px]'}>
                                        <Link href={'/Github.com/Cydinal'}>
                                              <Image src={'/github-142-svgrepo-com.svg'} alt={'Github-Profile'} width={40} height={40}/>
                                        </Link>

                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className={'text-xs'}>
                                       Github
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>




                   {/*<ArrowUpRight className={'bg-secondary text-6xl  border rounded-full fill-secondaryFade'}/>*/}
                   {/* <ArrowBigDownDash className={'bg-secondary text-3xl  border rounded-full fill-secondaryFade'}/>*/}
                   {/* <PersonStandingIcon className={'bg-secondary text-3xl  border rounded-full fill-secondaryFade'}/>*/}
                   {/* <BedSingleIcon className={'bg-secondary text-3xl  border rounded-full fill-secondaryFade'}/>*/}
                   {/* <ArrowDownLeftIcon className={'bg-secondary text-3xl  border rounded-full fill-secondaryFade'}/>*/}
                </div>

            </div>


        </section>
    );
}

export default Page;