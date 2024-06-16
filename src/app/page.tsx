'use client'
import {Button} from "@/components/ui/button";
import {FileDownIcon} from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import CountUp from "react-countup";
export default function Home() {
    const handleDownload=()=>{

    }
  return (
      <main className={'md:flex  p-20 '}>

          <div
              className={'mb-5 container leading-tight'}>
              <Photo/>
          </div>

          <div className={'text-center  mx-auto md:order-2'}>
              <code className={'font-semibold text-lg  '}>Software Developer</code>
              <article className={'items-center italic text-4xl text-accent font-semibold'}>Hello, I&apos;m</article>
              <p className={'text-5xl text-accent font-semibold contain-none'}>Nyarko Maxwell</p>
              <p className={'container mt-4 mb-5 text-xl'}>
                  A professional <code className={'text-3xl text-secondary font-semibold italic'}>FullStack Web Developer</code>,
                  skillfully crafting both client and server side code logic
                  <span className={"text-accent font-extrabold"}>.</span>

              </p>

              <div className={''}>
                      <Button variant={'outline'}
                              onClick={handleDownload}
                              className={'hover:bg-secondary border-4 border-secondaryFade'}>
                              Download CV
                          <span className={'hover:rotate-45'}>
                              <FileDownIcon/>
                          </span>
                      </Button>
              </div>

              <Socials containerStyle={'flex space-x-3 justify-center mt-5 tra '}
                       iconStyles={'border-accent rounded-full '}/>

              <div
                  className={'mt-5 font-semibold  border-2  rounded-md  p-5 items-center  space-y-4 '}>

                  <div className={'text-sm text-balance bg-secondary rounded-md items-center   '}>
                      <CountUp end={20}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'}/>&nbsp;
                      Technologies Mastered
                  </div>

                  <div className={'text-sm text-balance bg-secondary rounded-md items-center  '}>
                      <CountUp end={20}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'} />
                      &nbsp;Years of Experience</div>

                  <div  className={'text-sm text-balance bg-secondary rounded-md items-center   '}>
                      <CountUp end={20}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'}/>
                     &nbsp;Projects Completed</div>

                  <div className={'text-sm text-balance bg-secondary rounded-md items-center  '}>
                      <CountUp end={20}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'}/> &nbsp;Code Commits</div>

              </div>

          </div>




      </main>


  );
}
