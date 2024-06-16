import Link from "next/link";
import Nav from "@/components/Nav";

import MobileView from "@/components/MobileView";
import {Button} from "@/components/ui/button";
const Header = ()=>{
    return(
        <header className={"shadow-lg z-40 fixed w-full bg-secondaryDark"}>

                <div className={'container mx-auto flex justify-between items-center'}>
                    <Link href={'/'}>
                        <h1 className={'text-2xl font-extrabold text-accent z-50'}>Max Cydin <span className={'text-accent '}>.</span></h1>
                    </Link>

                    <div className={'hidden md:flex items-center gap-8'}>
                    <Nav/>
                        <Link href={'/contact'}>
                           <Button className={'bg-secondary accent-accent-hover animate-pulse'}>
                            Hire me
                        </Button>
                        </Link>


                    </div>
                    <div className={'md:hidden'}>
                    <MobileView/>

                    </div>
                </div>

            

        </header>
    )
}

export default Header