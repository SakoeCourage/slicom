import React from 'react'
import classNames from 'classnames'
import Link from "next/link"

const Sidebarpopup = ({ links, pathname }: { links: { title: string, link: string }[], pathname: string }) => {
    return <ul className={`z-50 rounded-md overflow-hidden h-max bg-[#eeead9] add-customer-bezier duration-300 w-[var(--sidebar-width)]  list-none pl-2 pr-3 py-[0.03rem]  `}>
        {links.map((link, i) =>
            <li key={i} className=" list-none">
                <Link
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
}

export default Sidebarpopup