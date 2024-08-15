'use client'
import {motion} from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area"
import {TabsContent,Tabs,TabsTrigger,TabsList} from "@radix-ui/react-tabs";
import {Separator} from "../../components/ui/separator";
import React from "react";
import Image from "next/image";
import {autoImplementMethods} from "next/dist/server/future/route-modules/app-route/helpers/auto-implement-methods";

const aboutData={
    title:"About me",
    description:"I am a software developer",
    info:[
        {fieldName:"Name",fieldValue:'Maxwell Nyarko'},
        {fieldName:"Phone",fieldValue:'(+233 559-372-778)'},
        {fieldName:"Experience",fieldValue:'5+'},
        {fieldName:"Nationality",fieldValue:'Ghanaian'},
        {fieldName:"Email",fieldValue:'nyarkomaxwell03@gmail.com'},
        {fieldName:"Freelance",fieldValue:'Available'},
        {fieldName:"Language",fieldValue:'English'},
    ]
}
const experience={
    title:"Work Experience",
    description:
    "   Lorm ipsum salivr immen fgjknd toidnd intdikjbnd gdiufnsikjnijfg bdignjijkg  Lorm ipsum salivr immen fgjknd toidnd intdikjbnd gdiufnsikjnijfg bdignjijkg Lorm ipsum salivr immen fgjknd toidnd intdikjbnd gdiufnsikjnijfg bdignjijkg  Lorm ipsum salivr immen fgjknd toidnd",
    items:[
        {company:"Lawnist",position:"FullStack Developer",duration:"2Years"},
        {company:"CyPrime",position:"Frontend Developer",duration:"2 years"},
        {company:"Cisco",position:"FullStack Developer",duration:"2Years"},
        {company:"Durist",position:"FullStack Developer",duration:"2Years"},
    ]
}
const education={
    title:"My Education",
    description: "Lorem ipsum notre pere mongoi ajjs isump noteut sjnisr ugsihfns fsiuhferaubruirhburbsiry rsyudbfjd ",
    items:[
        {school:"🏫Prempeh College-Ghana",course:"👨🏾‍🎓General Science",duration:"🗓️3 years"},
        {school:"🏫KNUST",course:"👨🏾‍🎓BSc.Computer Engineering",duration:"🗓️4 years"},
        // {school:"🏫SAIT",course:"👨🏾‍🎓Information Technology",duration:"🗓️2 years"},
    ]
}
const skills={
    title:"SKILLS",
    description:"Below are are the skills attained over the years",
    skillset:[
        {name:"Next.js",icon:"/nextjs-fill-svgrepo-com.svg"},
        {name:"Vercel.js",icon:"/html.svg"},
        {name:"Tailwind-CSS",icon:"/tailwind-css.svg"},
        {name:"NodeJs",icon:"/mongodb.svg"},
        {name:"MongoDB",icon:"/mongodb.svg"},
        {name:"HTML5",icon:"/html.svg"},
        {name:"Python",icon:"/python-svgrepo-com.svg"},
        {name:"Bash",icon:"/terminal-svgrepo-com.svg"},
        {name:"MongoDB",icon:"github-142-svgrepo-com.svg"},
        {name:"Postgres",icon:"postgresql.svg"},
    ]

}


const projects=[
    {num:'01',category:"frontend", title:"Project1",
        description:"Lorem ipsum notre uipo nore daf fbsfuaolfjnspuhdf udfbqeruehriu df",
        stack:[{name:"React"},{name:"HTML 5"},{name:"CSS 3"},{name:"JavaScript"}],github:"",live:""
    },
    {num:'02',category:"Backend", title:"Project2",
        description:"Lorem ipsum notre uipo nore daf fbsfuaolfjnspuhdf udfbqeruehriu df",
        stack:[{name:"Node"},{name:"MongoDB"},{name:"Express"},{name:"GraphQL"}],github:"",live:""
    },
]


function Page() {
    return(
        <Tabs defaultValue={'experience'} className={'container p-20'}>
            <div className={' md:justify-between '}>

                <TabsList className={'flex justify-center  gap-2  items-center'}>
                    <TabsTrigger value={'experience'} className={'bg-secondary px-4 py-1 rounded-md'}>Experience</TabsTrigger>
                    <TabsTrigger className={' bg-secondary px-4 py-1 rounded-md'} value={'education'}>Education</TabsTrigger>
                    <TabsTrigger className={' bg-secondary px-4 py-1 rounded-md'} value={'skills'}>Skills</TabsTrigger>
                    <TabsTrigger className={' bg-secondary px-4 py-1 rounded-md'} value={'about'}>About&nbsp;Me</TabsTrigger>

                </TabsList>

            </div>

            <div className={'flex  justify-center mx-auto mt-auto'}>

               <TabsContent value={'experience'}>
                   <div className={'items-center container'}>
                    <code className={'font-bold text-2xl md:text-4xl '}>
                        {experience.title}
                    </code>
                       <br/>
                       <br/>
                       <br/>

                   <div
                       className={'flex text-wrap leading-loose italic'}>
                       {experience.description}
                   </div>

                             <ScrollArea className={'h-[400px] mt-5 '}>
                                  <Separator className="my-2" />
                           <div className={'grid-cols-1 grid md:grid-cols-2 gap-4 items-center md:items-center md:justify-between md:mx-auto mt-20 md:pl-10 md:pr-10'}>
                               {experience.items.map((item,index)=>(
                                   <div key={index} className={'container items-center'}>
                                       <div className={'shadow-accent bg-secondary rounded-md grid grid-cols-2 '}>
                                           <div className={'text-2xl text-accent font-semibold'}>{item.company}</div>
                                           <code>📆{item.duration}||</code>
                                           <code className={'font-light'}>👨🏾‍💻{item.position}</code>
                                           <hr className={'text-accent'}/>
                                           <hr className={'text-DeepRed'}/>
                                           <hr className={'text-accent'}/>
                                           <hr className={'text-DeepRed'}/>
                                           <hr className={'text-DeepRed'}/>
                                           <hr className={'text-accent'}/>
                                           <hr className={'text-DeepRed'}/>
                                           <hr className={'text-accent border-secondaryDark'}/>
                                           <hr className={'text-accent'}/>


                                       </div>
                                   </div>
                               ))}
                           </div>
                             </ScrollArea>
                   </div>
               </TabsContent>

                <TabsContent value={'education'}>
                    <div className={'items-center'}>
                        <code className={'font-bold text-2xl '}> {education.title}</code>
                        <div className={'text-balance'}>
                            {education.description}
                        </div>

                        <div className={'flex flex-col  gap-4 justify-center items-center mt-5' }>
                            {education.items.map((item,index)=>(
                                <div key={index} className={'w-[400px]'}>
                                    <div className={'bg-secondary rounded-md space-y-4 '}>
                                    <div>{item.duration}</div>
                                    <div className={'font-semibold'}>{item.course}</div>
                                    <div className={'font-extrabold'}>{item.school}</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </TabsContent>


                <TabsContent value={'skills'}>
                    <div className={'items-center container'}>
                        <code className={'font-bold text-2xl '}> {skills.title}</code>
                        <div className={'container leading-2 mx-auto text-balance'}>
                            {skills.description}
                        </div>

     <ScrollArea className={'h-screen w-[200px] border-r-accent border-accent mt-5'}>
         <Separator className={'w-10'}/>

                            <div className={'container grid-cols-1 grid space-x-0 md:grid-cols-2 gap-2 items-center md:items-center md:justify-between  mt-20 '}>
                                {skills.skillset.map((item, index) => (
                                    <div key={index} className={' items-center hover:animate-pulse'}>
                                        <div className={'shadow-accent bg-secondary rounded-md grid grid-cols-2 w-[250px] p-10  '}>
                                            <div className={'fill-secondaryRed '}>
                                                <Image src={item.icon} alt={'tech'} width={40} height={40}/>
                                            </div>
                                            <code className={'font-light text-accent hover:text-secondaryWhite'}>{item.name}</code>
                                            <hr className={'text-accent mt-5 w-10'}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
     </ScrollArea>


                    </div>

                </TabsContent>

                <TabsContent value={'about'}>
                    <div className={'bg-secondary rounded-md'}>
                    {aboutData.info.map((item,index)=>(
                        <div key={index}>
                            <div className={'flex items-center justify-center mx-auto '}>
                                <div className={''}>{item.fieldName}</div>
                                <div className={''}>{item.fieldValue}</div>
                            </div>
                        </div>
                    ))}
                          </div>
                </TabsContent>
            </div>

        </Tabs>
    )
}

export default Page;