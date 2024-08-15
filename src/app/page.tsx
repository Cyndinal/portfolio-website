'use client'
import {Button} from "@/components/ui/button";
import {FileDownIcon} from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import CountUp from "react-countup";
import DownloadCv from "@/components/DownloadCV";
export default function Home() {

  return (
      <main className={'grid-cols-1 grid md:grid-cols-2 m-10'}>
          <div className={'mt-12'}>
              <Photo/>
          </div>

          <div className={'text-center mx-auto md:order-2'}>
              <code className={'font-semibold text-lg  '}>Software Developer</code>
              <article className={'items-center italic text-2xl md:text-4xl text-accent font-semibold'}>Hello, I&apos;m</article>
              <p className={'text-5xl text-accent font-semibold contain-none'}>Nyarko Maxwell</p>
              <p className={'container mt-4 mb-5 text-xl'}>
                  A professional
                  <code className={'text-3xl text-secondary font-semibold italic'}>
                  FullStack Web Developer</code>,
                  skillfully crafting both client and server side code logic
                  <span className={"text-accent font-extrabold"}>.</span>
              </p>

              <div>
                    <DownloadCv/>
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
                      <CountUp end={5}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'} />
                      &nbsp;Years of Experience</div>

                  <div  className={'text-sm text-balance bg-secondary rounded-md items-center   '}>
                      <CountUp end={30}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'}/>
                     &nbsp;Projects Completed</div>

                  <div className={'text-sm text-balance bg-secondary rounded-md items-center  '}>
                      <CountUp end={20}  start={0} delay={2} className={'text-2xl text-accent font-semibold text-center'}/>
                      &nbsp;Code Commits</div>

              </div>

          </div>




      </main>


  );
}
