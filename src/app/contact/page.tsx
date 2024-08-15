"use client"
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {RepeatIcon, SendIcon, XIcon} from "lucide-react";
import createPostAction from "@/app/action/createPostAction";
import {useRef} from "react";



function Page() {


    const ref = useRef<HTMLFormElement>(null)

    const handleFormSubmit=async (formData:FormData)=>{
        ref.current?.reset()
        await createPostAction(formData)
    }

    return (
        <div className={'container mx-auto p-10'}>
            <code className={'mb-5 flex items-center justify-center text-3xl text-accent'}>
                Lets get in touch👨🏾‍💻
            </code>

            <section className={'flex-1 container md:justify-between md:flex '}>
               <div className={''}>

               </div>

                <div className={'flex flex-col flex-1 '}>

                <form className={'flex flex-col items-center space-y-2 rounded-md  w-full'}
                      ref={ref}
                      action={handleFormSubmit}>
                        <input type={'text'}
                               name={"firstName"}
                               placeholder={'FirstName'}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}
                               required={true}
                        />

                        <input type={'text'}
                               name={"lastName"}
                               placeholder={'LastName'}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}

                        />

                        <input type={'email'}
                               name={"email"}
                               placeholder={'From Email'}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"} required={true}/>

                        <input type={'number'}
                               name={"phone"}
                               placeholder={'Phone'}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"} required={true}/>

                        <div className={'flex space-x-4'}>
                        <input
                            placeholder={"Subject"}
                            className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}
                            type={'text'} name={"Subject"} />

                        </div>


                        <textarea
                            placeholder={'Enter your message'}
                            name={"textContent"}
                            datatype={'text'}
                            className={'items-center rounded-md w-[380px] h-[200px] outline-none resize-none text-secondary font-semibold '}
                            required={true}
                        >

                          </textarea>

                        <Button
                            type={"submit"} className={'bg-secondaryFade animate-pulse  '}>
                            Send Message
                            <span className={'items-center hover:rotate-45'}>
                            <SendIcon/>
                        </span>
                        </Button>
                    </form>
                </div>

            </section>


        </div>
    );
}

export default Page;