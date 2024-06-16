'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

function Nav() {
    const pathname = usePathname()
    return (

            <>
            {headerlist.map((link, index) => (
                 <div key={index} className={'gap-8'}>
                     <Link key={index} href={link.path} className={`${link.path === pathname &&
                "text-secondary border-b-2"}
                 capitalize  border-accent font-semibold hover:accent-accent transition-all`}>
                    {link.name}
                </Link>

                </div>


            ))}
            </>



    );
}

export const headerlist = [
    {name: "home", path: '/'},
    {name: "services", path: '/services'},
    {name: "resume", path: '/resume'},
    {name: "projects", path: '/work'},
    {name: "blog", path: '/blogs'},
    {name: "contact", path: '/contact'},

]

export default Nav;