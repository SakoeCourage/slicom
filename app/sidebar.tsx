"use client"
import React from "react";
import Sidebaritem from "./portal/mainlayoutpartials/Sidebaritem";
import { sidebarRoutes as sideBarSections } from "./portal/mainlayoutpartials/sideBarRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from '@iconify/react'
import SimpleBar from "simplebar-react";

interface params { link: string, toggleSidebar: () => void, title: string, icon: string }
function Sidebarlink(props: params) {
    const pathname = usePathname()
    return <Link
        // onClick={props.toggleSidebar}
        href={props.link}
        className={pathname.startsWith(props.link) ? 'route-active' : 'route-inactive'} >
        <nav className="route-icon overflow-hidden p-2 rounded-full h-8 w-8 aspect-square flex items-center justify-center
        ">
            <Icon fontSize={40} className="" icon={props.icon} />
        </nav>
        <span className="route-title">{props.title}</span>
    </Link>
}




export default function Sidebar({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className=" h-screen overflow-hidden w-full hidden md:block md:w-[20rem] bg-[#fdfaf1] ">
            <nav className=" h-[var(--header-height)] flex items-center  w-full  text-white py-1 border-b ">
                <nav className="px-5 flex items-center h-3/4 object-contain">
                    <Image className=" object-contain h-full  " src="/images/slicomlogo.png" alt="slico-icon" width={150} height={100} quality={100} />
                </nav>
            </nav>
            <SimpleBar autoHide={true} className="w-full  basis-auto flex flex-col gap-5  list-none py-1 h-[calc(100vh-var(--header-height))]">
                {sideBarSections.map((section, i) => <nav key={i} className="w-full flex flex-col gap-3 text-sm tracking-tight capitalize whitespace-nowrap"  >

                    <nav className=" flex items-center  px-4 pt-6 py-2  uppercase tracking-wide text-gray-500/80 text-xs font-medium">{section.sectionName}</nav>

                    <ul className=" w-full basis-auto px-3  flex flex-col gap-1 h-full min-h-max list-none">
                        {section.routes.map((route, i) => <li key={i} className="w-full text-sm tracking-tight capitalize whitespace-nowrap"  >
                            {!route.links ?
                                <Sidebarlink toggleSidebar={toggleSidebar} title={route.title} link={route.link} icon={route.icon} /> :
                                <Sidebaritem toggleSidebar={toggleSidebar} title={route.title} icon={route.icon} links={route.links} />
                            }
                        </li>
                        )}
                    </ul>
                </nav>
                )}
            </SimpleBar>
        </div>
    );
}