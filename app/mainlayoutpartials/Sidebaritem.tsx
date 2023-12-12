"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { usePathname } from "next/navigation";
import { Icon } from '@iconify/react'
import classNames from "classnames";

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
    setScrollHeight(listitems!.current!.scrollHeight)
  }
  useEffect(() => {
    newScrollHeight()
    let checkisIncurrentpathname = Object.values(props.links).map((value) => value.link).some(value => pathname.startsWith(value))
    setisIncurrentpathname(checkisIncurrentpathname)
    setisColapsed(!checkisIncurrentpathname)
  }, [pathname])

  useEffect(() => {
    if (isColapsed) {
      listitems!.current!.style.height = '0';
    } else {
      listitems!.current!.style.height = `${scrollHeight}px`;
    }
  }, [isColapsed]);


  return (
    <div className=" overflow-hidden">
      <nav className={`cursor-pointer  transition-all duration-200 w-full  ${isIncurrentpathname ? 'route-active' : 'route-inactive'} `} onClick={() => setisColapsed(!isColapsed)}>
        <nav className="route-icon p-2 overflow-hidden  rounded-full h-8 w-8 aspect-square flex items-center justify-center">
          <Icon fontSize="2rem" className="route-icon" icon={props.icon} />
        </nav>
        <span className="route-title">{props.title}</span>
        <svg className={` transfrom transition-transform !justify-self-end ml-auto  ${!isColapsed && ' rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" /></svg>
      </nav>
      <ul ref={listitems} className={`overflow-hidden transition-[height] ease-in-out duration-200 bg-gray-400/10 list-none px-1 py-[0.03rem]  `}>
        {props.links.map((link, i) =>
          <li key={i} className=" list-none">
            <Link
              // onClick={props.toggleSidebar}
              href={link.link}
              className={
                classNames({
                  'flex item-center gap-1 hover:text-indigo-500 py-2 pl-14 w-full text-sm font-semibold bg-[#eef2ff]/25 ': true,
                  'text-indigo-600  rounded-md w-full': pathname.startsWith(link.link),
                  'text-gray-500': !pathname.startsWith(link.link)
                })}>
              <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
              <nav className="route-title my-auto"> {link.title}</nav>
            </Link>
          </li>
        )}
      </ul>


    </div>
  );
}