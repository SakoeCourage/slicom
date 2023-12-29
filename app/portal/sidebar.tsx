"use client"
import React, { useEffect } from "react";
import Sidebaritem from "./mainlayoutpartials/Sidebaritem";
import { sidebarRoutes as sideBarSections } from "./mainlayoutpartials/sideBarRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from '@iconify/react'
import SimpleBar from "simplebar-react";
import { useSidebar } from "../providers/Sidebarserviceprovider";
import { DialogOverlay } from "../components/ui/partials/dialoguecomponents";
import IconifyIcon from "../components/ui/Iconsbutton";

interface params { link: string, toggleSidebar: () => void, title: string, icon: string }
function Sidebarlink(props: params) {
    const { sidebarStateOpen } = useSidebar()
    const { mini, full } = sidebarStateOpen
    const pathname = usePathname()
    return <Link
        onClick={props.toggleSidebar}
        href={props.link}
        className={pathname.startsWith(props.link) ? 'route-active' : 'route-inactive'} >
        <nav className={`route-icon overflow-hidden  p-2 rounded-full max-h-[2rem] max-w-[2rem] h-full w-full aspect-square flex items-center justify-center ${mini && "mx-auto"}`}>
            <Icon  fontSize={40} className=" h-full w-full" icon={props.icon} />
        </nav>
        <span className={`route-title ${mini ? 'hidden' : "transition-fadeIn"} `}>{props.title}</span>
    </Link>
}




export default function Sidebar() {
    const { toggleSideBar, sidebarStateOpen } = useSidebar()

    return (
        <div className={`h-screen  overflow-visible  fixed  inset-0 z-50 md:z-auto md:relative md:block  bg-[#fdfaf1] transition-[left] add-sidebar-bezier  ${sidebarStateOpen.mini ? 'w-[var(--sidebar-mini-width)]' : 'w-[var(--sidebar-width)]'}  ${sidebarStateOpen.full ? 'sidebaropened' : 'sidebarclosed'}`}>
            <nav className=" h-[var(--header-height)] flex items-center justify-between  w-full  text-white py-1 border-b  ">
                <nav className="px-5 flex items-center h-3/4 object-contain">
                    <Image className=" object-contain h-full  " src="/images/slicomlogo.png" alt="slico-icon" width={150} height={100} quality={100} />
                </nav>
            </nav>
            <SimpleBar forceVisible="y" autoHide={true} className="w-full overflow-x-hidden z-50 basis-auto flex flex-col gap-5  list-none py-1 h-[calc(100vh-var(--header-height))]">
                {sideBarSections.map((section, i) => <nav key={i} className="w-full flex flex-col gap-3 text-sm tracking-tight capitalize whitespace-nowrap"  >

                    <nav className={` flex items-center  px-4 pt-6 py-2 truncate w-full uppercase tracking-wide text-gray-500/80 text-xs font-medium ${sidebarStateOpen.mini && 'mx-auto text-center'}`}>{section.sectionName}</nav>

                    <ul className=" w-full basis-auto px-3  flex flex-col gap-1 h-full min-h-max list-none">
                        {section.routes.map((route, i) => <li key={i} className="w-full text-sm tracking-tight capitalize whitespace-nowrap"  >
                            {!route.links ?
                                <Sidebarlink toggleSidebar={toggleSideBar} title={route.title} link={route.link} icon={route.icon} /> :
                                <Sidebaritem toggleSidebar={toggleSideBar} title={route.title} icon={route.icon} links={route.links} />
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