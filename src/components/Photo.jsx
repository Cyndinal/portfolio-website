import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion"
function Photo() {

    return (
        <div className={''}>
            <Image
                     width={398}
                     height={198}
                     src={'/cydin.jpg'}
                     priority={true}
                     quality={100}
                     className={'rounded-full transform'} alt={'Profile'}/>

        </div>

    );
}

export default Photo;