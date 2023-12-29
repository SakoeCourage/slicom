"use client"
import Link from "next/link";
import { useState, useEffect, useRef, useLayoutEffect, forwardRef, ForwardedRef } from 'react'
import React from 'react'
import { usePathname } from "next/navigation";
import { Icon } from '@iconify/react'
import classNames from "classnames";
import Sidebarpopup from "./Sidebarpopup";
import { useSidebar } from "app/app/providers/Sidebarserviceprovider";

interface params {
  links: { title: string, link: string }[],
  toggleSidebar: () => void,
  title: string,
  icon: string
}

export default function Sidebaritem(props: params) {
  const { sidebarStateOpen } = useSidebar()
  const { mini, full } = sidebarStateOpen
  const pathname = usePathname()
  const [isColapsed, setisColapsed] = useState(true)
  const [isIncurrentpathname, setisIncurrentpathname] = useState(false)
  let listitems = useRef<HTMLUListElement | null>(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  /**
    Sidebar Popup States
   * 
   */
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0 });
  const sidebarItemRef = useRef<HTMLDivElement | null>(null)
  const visibilityTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleHover = () => {
    clearTimeout(visibilityTimeout.current!)
    if (sidebarItemRef.current) {
      const { top } = sidebarItemRef.current.getBoundingClientRect()
      const documentTop = window.scrollY || document.documentElement.scrollTop;
      

      if ((documentTop + top + listitems.current!.scrollHeight! ?? 0) >= window.innerHeight) {
          setPopupPosition({
            top: window.innerHeight - 2 - listitems.current!.scrollHeight! ?? 0
          })
      } else {
        //Deducting 4 to compensate for box padding
        setPopupPosition({
          top: (top + documentTop) - 4
        });
      }


      setPopupVisible(true);
    }

  };


  const handleLeave = () => {
    if (visibilityTimeout.current) {
      clearTimeout(visibilityTimeout.current)
    }
    visibilityTimeout.current = setTimeout(() => {
      setPopupVisible(false)
    }, 50)
  };


  useEffect(() => {
    setScrollHeight(listitems!.current!.scrollHeight)
    let checkisIncurrentpathname = Object.values(props.links).map((value) => value.link).some(value => pathname.startsWith(value))
    setisIncurrentpathname(checkisIncurrentpathname)
    setisColapsed(!checkisIncurrentpathname)
  }, [pathname])


  useLayoutEffect(() => {
    if (mini) {
      listitems!.current!.style.height = '0';
    } else {
      if (isColapsed) {
        listitems!.current!.style.height = '0';
      } else {
        listitems!.current!.style.height = `${scrollHeight}px`;
      }
    }
  }, [isColapsed, mini]);


  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeave()}
      className=" overflow-visible relative"  >
      <nav className={
        classNames({
          'cursor-pointer  transition-all duration-200 w-full ': true,
          '!rounded-b-none': !isColapsed && isIncurrentpathname,
          'route-active ': isIncurrentpathname,
          'route-inactive ': !isIncurrentpathname,
        })
      } onClick={() => { if (mini == false) setisColapsed(!isColapsed) }}
      >
        <nav
          ref={sidebarItemRef}
          className={`route-icon  p-2 overflow-hidden  whitespace-nowrap rounded-full max-h-[2rem] max-w-[2rem] h-full w-full aspect-square flex items-center justify-center transition-all add-customer-bezier duration-300 ${mini && "mx-auto"}`}>
          <Icon fontSize={10} className="route-icon whitespace-nowrap h-full w-full" icon={props.icon} />
        </nav>
        <span className={`route-title ${mini ? 'hidden' : "transition-fadeIn"}`}>{props.title}</span>
        <svg className={` transfrom transition-transform  !justify-self-end ml-auto ${mini ? 'hidden' : "transition-fadeIn"}  ${!isColapsed && ' rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" /></svg>
      </nav>
      <ul ref={listitems} className={`${isIncurrentpathname && "rounded-b-md"} overflow-hidden h-0  transition-all add-customer-bezier duration-300 bg-[#eeead9]  list-none px-1 py-[0.03rem]  `}>
        {props.links.map((link, i) =>
          <li
            key={i}
            className=" list-none">
            <Link
              onClick={props.toggleSidebar}
              href={link.link}
              className={
                classNames({
                  'flex item-center gap-1  hover:text-orange-500 py-1 pl-2 w-full text-sm   ': true,
                  'text-orange-600  rounded-md w-full font-semibold': pathname.startsWith(link.link),
                  '!text-gray-600/95 font-normal': !pathname.startsWith(link.link)
                })}>
              <svg className={`my-auto transition-all add-customer-bezier duration-300 ${mini && 'mx-auto'}`} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
              <nav className={`route-title my-auto pl-1  ${mini ? 'hidden' : "transition-fadeIn"}`}> {link.title}</nav>
            </Link>
          </li>
        )}
      </ul>

      {mini &&
        <Sidebarpopup
          setPopupVisible={setPopupVisible}
          top={popupPosition.top}
          isVisible={isPopupVisible}
          visibilityTimeout={visibilityTimeout}
          handleLeave={handleLeave}
        >
          <ul className={`z-50 rounded-md overflow-hidden h-max bg-[#eeead9] add-customer-bezier duration-300   list-none pl-2 pr-3 py-[0.03rem]  `}>
            {props.links.map((link, i) =>
              <li key={i} className=" list-none">
                <Link
                  onClick={props.toggleSidebar}
                  href={link.link}
                  className={
                    classNames({
                      'flex item-center gap-1  hover:text-orange-500 py-1 pl-2 w-full text-sm   ': true,
                      'text-orange-600  rounded-md w-full font-semibold': pathname.startsWith(link.link),
                      '!text-gray-600/95 font-normal': !pathname.startsWith(link.link)
                    })}>
                  <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" /></svg>
                  <nav className="route-title my-auto pl-1 "> {link.title}</nav>
                </Link>
              </li>
            )}
          </ul>
        </Sidebarpopup>
      }



    </div>
  );
}