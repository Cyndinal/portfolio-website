'use client'
import {usePathname} from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {ArrowBigDown, MenuSquare} from "lucide-react";
import Link from "next/link";
import {headerlist} from "@/components/Nav";



function MobileView() {
    const path = usePathname();
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <MenuSquare className={'text-xl text-accent'}/>
                </SheetTrigger>
                <SheetContent className={'w-40 z-50 bg-secondaryDark'}
                >
                    <Link href={'/'}>
                        <code className={'flex mt-6 items-center text-2xl font-semibold text-accent'}>
                            <Link href={'/'} >Maxwell</Link>
                            <ArrowBigDown className={'fill-secondaryFade'}/>
                        </code>
                    </Link>

                    {headerlist.map((links,index)=>(
                        <div key={index} className={`${path=== links.path && "text-secondary border-b-5 outline-none"} items-center mt-6`}>
                            <Link href={links.path} className={'font-semibold stroke-2 capitalize hover:text-secondarySidebar'}>
                                {links.name}
                            </Link>
                        </div>
                    ))}

                </SheetContent>
            </Sheet>
        </>
    );
}

export default MobileView;