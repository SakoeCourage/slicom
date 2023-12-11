"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { usePathname } from "next/navigation";


interface params {
  links: { title: string, link: string }[],
  toggleSidebar: () => void,
  title: string,
  icon: string
}
export default function Sidebaritem(props: params) {
  const pathname = usePathname()
  const [isColapsed, setisColapsed] = useState(true)
  const [isIncurrentpathname, setisIncurrentpathname] = useState(false)
  let listitems = useRef<HTMLUListElement | null>(null)
  const [scrollHeight, setScrollHeight] = useState(0)
  const newScrollHeight = () => {
    // setScrollHeight(listitems?.current.scrollHeight)
  }
  useEffect(() => {
    newScrollHeight()
    let checkisIncurrentpathname = Object.values(props.links).map((value) => value.link).some(value => pathname.startsWith(value))
    setisIncurrentpathname(checkisIncurrentpathname)
    setisColapsed(!checkisIncurrentpathname)
  }, [pathname])

  useEffect(() => {
    if (isColapsed) {
      // listitems?.current.style.height = 0
    } else {
      // listitems?.current.style.height = `${scrollHeight}px`
    }
  }, [isColapsed])
  return (
    <div className=" overflow-hidden">
      <nav className={` px-6 py-3 flex items-center justify-between cursor-pointer transition-all duration-200  ${isIncurrentpathname && 'text-indigo-400'} `} onClick={() => setisColapsed(!isColapsed)}>
        <span className="flex items-center gap-3  ">
          {/* <FontAwesomeIcon icon={props.icon} size='md' /> */}
          <span className=" sentence ">{props.title}</span>
        </span>
        <svg className={` transfrom transition-transform justify-self-end ml-3  ${!isColapsed && ' rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" /></svg>
      </nav>
      <ul ref={listitems} className={`overflow-hidden transition-[height] duration-200 bg-gray-400/10 list-none  `}>
        {props.links.map((link, i) =>
          <li key={i} className=" list-none">
            <Link
              onClick={props.toggleSidebar}
              href={link.link}
              className={pathname.startsWith(link.link) ?
                'flex item-center gap-1 hover:bg-gray-500/10 py-2 pl-7 text-indigo-400 rounded-md w-full'
                :
                'flex item-center gap-1 hover:bg-gray-500/10 py-2 pl-7 w-full'}    >
              <nav className="route-title">{link.title}</nav>
            </Link>
          </li>
        )}
      </ul>


    </div>
  );
}