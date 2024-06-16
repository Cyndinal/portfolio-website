'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"
function PageTransition({children}) {
    const path = usePathname()
    return (
        <AnimatePresence>
            <div key={path}>
                <motion.div
                    initial={{opacity:1}}
                    // animate={{ opacity: 1}}
                    transition={{delay:1,duration:0.4, ease:"easeInOut"}}
                    // exit={{ opacity: 0 }}
                    className={'h-screen w-screen fixed top-0 bg-primary pointer-events-none'}
                />
                    {children}


            </div>


        </AnimatePresence>
    );
}

export default PageTransition;