"use client"
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {RepeatIcon, SendIcon, XIcon} from "lucide-react";
import createPostAction from "@/app/action/createPostAction";
import {useRef} from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import Image from "next/image";
import {FileTypes} from "@/app/FileTypes";


function Page() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [textContent, setTextContent] = useState("")

    const [webDev, setWebDev] = useState("Web Development")
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState<null | string>(null)
    const inputFileRef = useRef<HTMLInputElement>(null)
    const ref = useRef<HTMLFormElement>(null)









    const handleFormSubmit=async (formData:FormData)=>{
       const firstName1 = formData.get(firstName)
       const lastName1 = formData.get(lastName)
       const email1 = formData.get(email)
       const phone1 = formData.get(phone)
       const textContent1 = formData.get(textContent)


        setFirstName("")
        setLastName("")
        setPhone("")
        setTextContent("")
        setEmail("")

        await createPostAction(formData)
    }
      const handleImage = (event:React.ChangeEvent<HTMLInputElement>)=>{
      const files: File | undefined =  event.target.files?.[0]
          if(files){
             setPreview(URL.createObjectURL(files))
          }
          const reader = new FileReader()
          reader.onerror = ()=>console.log("Error")
          reader.onabort= ()=>console.log("Upload aborted")




      }





    return (
        <div className={'container mx-auto p-10'}>
            <code className={'mb-5 flex items-center justify-center text-3xl text-accent'}>
                Let work together!👨🏾‍💻
            </code>




            <section className={'flex-1 container md:justify-between md:flex '}>

               <div className={''}>
                {preview && (
                        <Image src={preview} alt={"Preview"}
                               className={"object-cover rounded-md"} width={400} height={100}/>
                )}

                 {preview &&
                     <div className={'flex justify-between '}>
                         <div
                             className={'flex bg-secondaryRed rounded-md items-center w-[25%] font-bold cursor-pointer'}
                             onClick={() => inputFileRef.current?.click()}>
                             <RepeatIcon size={20} className={'items-center rounded-md'}/> Change
                         </div>

                         <div className={'flex bg-DeepRed rounded-md items-center w-[25%] font-bold cursor-pointer'}
                              onClick={() => setPreview(null)}>
                             <XIcon size={20} className={'items-center rounded-md'}/> Cancel
                         </div>

                     </div>


                 }


               </div>


                <div className={'flex flex-col flex-1 '}>
                <form className={'flex flex-col items-center space-y-2 rounded-md  w-full'} action={formData => {
                        // const promise = handleFormSubmit(formData)
                    }}>

                        <input type={'text'}
                               value={firstName}
                               placeholder={'firstName'}
                               onChange={(e) => setFirstName(e.target.value)}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}/>

                        <input type={'text'}
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                               placeholder={'LastName'}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}/>

                        <input type={email}
                               value={email}
                               placeholder={'From Email'}
                               onChange={(e) => setEmail(e.target.value)}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}/>

                        <input type={'number'}
                               value={phone}
                               placeholder={'Phone'}
                               onChange={(e) => setPhone(e.target.value)}
                               className={"outline-none font-bold p-3 w-full md:w-80 text-balance rounded-md text-secondary"}/>
                        <div className={'flex space-x-4'}>
                            <div>
                                {/*Button is here*/}
                                <Button
                                    onClick={() => inputFileRef.current?.click()}
                                    className={'bg-secondaryRed'}>
                                    {preview ? ("Change") : ("Add")} file
                                </Button></div>
                            <Select>
                                <SelectTrigger className="w-[250px]">
                                    <SelectValue placeholder="Select a Service"/>

                                </SelectTrigger>
                                <SelectContent className={'bg-secondary outline-none'}>
                                    <SelectGroup>
                                        {/*<SelectLabel></SelectLabel>*/}
                                        <SelectItem value={"Web Development"}
                                                    className={"hover:bg-secondaryRed rounded-md"}>

                                            Frontend Development
                                        </SelectItem>

                                        <SelectItem value={"UX"}
                                                    className={"hover:bg-secondaryRed rounded-md"}>Backend
                                            Development</SelectItem>

                                        <SelectItem value={"SEO"}
                                                    className={"hover:bg-secondaryRed rounded-md"}>FullStack
                                            Development</SelectItem>

                                        <SelectItem value={"Design"} className={"hover:bg-secondaryRed rounded-md"}>Search
                                            Engine Optimisation(SEO)</SelectItem>
                                        <SelectItem value={"Design"} className={"hover:bg-secondaryRed rounded-md"}>Logo
                                            Design</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>

                        <textarea
                            value={textContent}
                            datatype={'text'}
                            onChange={(e) => setTextContent(e.target.value)}
                            className={'items-center rounded-md w-[380px] h-[300px] outline-none resize-none text-secondary font-semibold '}>

                    </textarea>

                        <input hidden
                               multiple={true}
                               ref={inputFileRef}
                               onChange={handleImage}
                               type={'file'} accept={'image/*'}/>


                        <Button type={"submit"} className={'bg-secondaryFade animate-pulse  '}>
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