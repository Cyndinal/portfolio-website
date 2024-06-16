'use client'
import React from 'react';
import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import Stairs from "@/components/Stairs";

function StairTransition() {
    const path = usePathname()
    return (
        <AnimatePresence mode={'wait'}>
            <div>
                <div className={'flex w-screen h-screen z-50 top-0 left-0 right-0 pointer-events-none'}>
                <Stairs/>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default StairTransition;