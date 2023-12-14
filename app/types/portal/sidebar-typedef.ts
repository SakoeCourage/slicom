
/**
 * Variants of sidebar routes
 */
export type routesTypesDef = {
    title: string;
    icon: string;
    link: string;
    links?: undefined;
} | {
    title: string;
    icon: string;
    links: {
        title: string;
        link: string;
    }[];
    link?: undefined;
}

/**
 * Typical Sidebar typescheme with sections
 */
export type routesListWitSections = {
    sectionName: string,
    routes: routesTypesDef[]
}[]