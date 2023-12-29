import React, { useState, createContext, useContext, useEffect } from 'react'
const sideBarContext = createContext({});

const miniSidebarLocalStorageKey: string = "sidebar-mini"

type sideBarOpenstateOptions = {
    mini: boolean,
    full: boolean
}
interface sidebarContextParams {
    sidebarStateOpen: sideBarOpenstateOptions,
    setSidebarStateOpen: React.Dispatch<React.SetStateAction<sideBarOpenstateOptions>>
    toggleSideBar: () => void,
    toggleMiniSidebar: () => void
}
interface ISidebarparams {
    children: React.ReactNode
}

function Sidebarserviceprovider({ children }: ISidebarparams) {
    const [sidebarStateOpen, setSidebarStateOpen] = useState<sideBarOpenstateOptions>(
        {
            mini: localStorage.getItem(miniSidebarLocalStorageKey) ? true : false,
            full: false
        })
    const toggleSideBar = (): void => setSidebarStateOpen({
        full: false,
        mini: sidebarStateOpen.mini
    })

    const handleOnWindowResize = () => {
        if (window.innerWidth <= 768) {
            setSidebarStateOpen({
                full: false,
                mini: false
            })
        } else {
            setSidebarStateOpen({
                full: false,
                mini: localStorage.getItem(miniSidebarLocalStorageKey) ? true : false,
            })
        }

    }

    const toggleMiniSidebar = () => {
        const isLocalStorageSet = localStorage.getItem(miniSidebarLocalStorageKey)
        if (!isLocalStorageSet) {
            localStorage.setItem(miniSidebarLocalStorageKey, "true")
            setSidebarStateOpen((cv) => cv = { full: cv.full, mini: true })
        } else {
            localStorage.removeItem(miniSidebarLocalStorageKey)
            setSidebarStateOpen((cv) => cv = { full: cv.full, mini: false })
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleOnWindowResize, true);
        return () => window.removeEventListener('resize', handleOnWindowResize, true)
    }, [])

    const values: sidebarContextParams = { sidebarStateOpen, setSidebarStateOpen, toggleSideBar, toggleMiniSidebar }

    return (
        <sideBarContext.Provider value={values}>
            {children}
        </sideBarContext.Provider>
    )
}
export default Sidebarserviceprovider

export function useSidebar(): sidebarContextParams {
    if (sideBarContext.Provider == null) throw ("Unable to start Sidebar Service");
    return useContext(sideBarContext) as sidebarContextParams
}