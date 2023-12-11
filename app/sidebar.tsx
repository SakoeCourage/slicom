"use client"
import React from "react";
import Sidebaritem from "./mainlayoutpartials/Sidebaritem";
import { sidebarRoutes as sideBarSections } from "./mainlayoutpartials/sideBarRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from '@iconify/react'

interface params { link: string, toggleSidebar: () => void, title: string, icon: string }



function Sidebarlink(props: params) {
    const pathname = usePathname()
    return <Link onClick={props.toggleSidebar} href={props.link}
        className={pathname.startsWith(props.link) ? 'route-active' : 'route-inactive'} >
        <nav className="route-icon p-2 rounded-full h-8 w-8 aspect-square flex items-center justify-center
        ">
            <Icon className="" icon={props.icon} />
        </nav>
        <span className="route-title">{props.title}</span>
    </Link>
}




export default function Sidebar({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className=" h-screen overflow-hidden w-full lg:max-w-sm ">
            <nav className=" basis-[var(--header-height)] w-full  text-white py-1 border-b-2 ">
                <nav className="text-4xl font-bold flex flex-col justify-start items-start px-5 mb-1 space-x-3">
                    <Image src="/images/slicomlogo.png" alt="slico-icon" width={150} height={150} quality={50} />
                </nav>
            </nav>
            <ul className="overflow-y-scroll w-full basis-auto flex flex-col gap-3 h-full min-h-max list-none py-4">
                {sideBarSections.map((section, i) => <li key={i} className="w-full flex flex-col gap-3 text-sm tracking-tight capitalize whitespace-nowrap"  >
                    <span className=" inline-block px-6 py-2 uppercase tracking-wide text-[#B1B3B5] font-medium">{section.sectionName}</span>
                    <ul className=" w-full basis-auto flex flex-col gap-3 h-full min-h-max list-none">
                        {section.routes.map((route, i) => <li key={i} className="w-full text-sm tracking-tight capitalize whitespace-nowrap"  >
                            {!route.links ?
                                <Sidebarlink toggleSidebar={toggleSidebar} title={route.title} link={route.link} icon={route.icon} /> :
                                <Sidebaritem toggleSidebar={toggleSidebar} title={route.title} icon={route.icon} links={route.links} />
                            }
                        </li>
                        )}
                    </ul>
                </li>
                )}
            </ul>
        </div>
    );
}