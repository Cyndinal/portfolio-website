import React from 'react';
import {Button} from "@/components/ui/button";

function Attachment() {

    // const [preview, setPreview] = useState<null | string>(null)
    // const inputFileRef = useRef<HTMLInputElement>(null)

    //   const handleImage = (event:React.ChangeEvent<HTMLInputElement>)=>{
    //   const files: File | undefined =  event.target.files?.[0]
    //       if(files){
    //          setPreview(URL.createObjectURL(files))
    //       }}

    return (
        <div>



            {/*{preview && (*/}
            {/*        <Image src={preview} alt={"Preview"}*/}
            {/*               className={"object-cover rounded-md"} width={400} height={100}/>*/}
            {/*)}*/}

            {/* {preview &&*/}
            {/*     <div className={'flex justify-between '}>*/}
            {/*         <div*/}
            {/*             className={'flex bg-secondaryRed rounded-md items-center w-[25%] font-bold cursor-pointer'}*/}
            {/*             onClick={() => inputFileRef.current?.click()}>*/}
            {/*             <RepeatIcon size={20} className={'items-center rounded-md'}/> Change*/}
            {/*         </div>*/}

            {/*         <div className={'flex bg-DeepRed rounded-md items-center w-[25%] font-bold cursor-pointer'}*/}
            {/*              onClick={() => setPreview(null)}>*/}
            {/*             <XIcon size={20} className={'items-center rounded-md'}/> Cancel*/}
            {/*         </div>*/}

            {/*     </div>*/}


            {/* }*/}



            <input hidden
                   multiple={true}
                // ref={inputFileRef}
                   type={'file'} accept={'image/*'}/>


            <div>
                {/*Button is here*/}
                <Button
                    // onClick={() => inputFileRef.current?.click()}
                    className={'bg-secondaryRed'}>
                    Add
                    {/*{preview ? ("Change") : ("Add")} file*/}
                </Button></div>

        </div>
    );
}

export default Attachment;