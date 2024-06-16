import { motion, AnimatePresence } from "framer-motion"
import StairTransition from "./StairTransition";

const AnimateStairs ={
    initial:{
        top:"0%"
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%","0%"]
    }
}

const reverseIndex = (index)=>{
    const totalSteps = 6;
    return totalSteps - index-1


}
function Stairs() {
    return (
        <>
            {[...Array(6)].map((_,index)=>(
                <motion.div key={index}
                            variants={StairTransition}
                            initial={"initial"}
                            animate={"animate"}
                            exit={"exit"}
                            transition={{
                                duration:0.4,
                                ease:'easeInOut',
                                delay:reverseIndex(index) * 0.1
                            }}
                            className={'h-full w-full bg-blue relative'}
                />

            ))}
        </>
    );
}

export default Stairs;