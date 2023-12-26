import type { routesListWitSections } from "app/app/types/portal/sidebar-typedef";

export let sidebarRoutes: routesListWitSections =
    [
        {
            sectionName: "Basics",
            routes: [
                {
                    title: 'Dashboard',
                    icon: "mingcute:grid-fill",
                    link: '/dashboard',
                },
                {
                    title: "Underwriting",
                    icon: "streamline:chat-bubble-square-write-solid",
                    links: [
                        {
                            title: "Policy",
                            link: '/underwriting/policy-underwriting'
                        },
                        {
                            title: "All Ncd",
                            link: '/underwriting/ncd'
                        },
                    ],
                },
                {
                    title: "Claims",
                    icon: "teenyicons:money-solid",
                    link: "/claims"
                },
                {
                    title: "Endorsements",
                    icon: "mingcute:edit-fill",
                    link: "/endorsements"
                },
                {
                    title: "Stickers",
                    icon: "mdi:sticker-plus",
                    links: [
                        {
                            title: "Purchases",
                            link: '/stickers/purchases'
                        },
                        {
                            title: "All Stickers",
                            link: '/stickers/all-prices'
                        },
                    ],
                },
                {
                    title: "Reporting",
                    icon: "icon-park-solid:book",
                    links: [

                        {
                            title: 'Pending Policies',
                            link: '/reporting/pending-policies',
                        },
                        {
                            title: 'Approved Policies',
                            link: '/reporting/approved-policies',

                        },
                        {
                            title: 'Cancelled Policies',
                            link: '/reporting/cancelled-policies',

                        },
                    ],
                }
            ]
        },
        {
            sectionName: "SETUPS",
            routes: [
                {
                    title: 'Intermediaries',
                    icon: "heroicons:user-group-solid",
                    links: [
                        {
                            title: 'All Intermediaries',
                            link: '/settings/intermediaries/all',
                        },
                        {
                            title: 'Brokers',
                            link: '/settings/intermediaries/brokers',
                        },
                        {
                            title: 'Agents',
                            link: '/settings/intermediaries/agents',
                        },
                        {
                            title: 'Reinsure',
                            link: '/settings/intermediaries/reinsure',
                        }
                    ],
                },
                {
                    title: "Institutions",
                    icon: "bi:building-fill",
                    links: [
                        {
                            title: 'All Institutions',
                            link: '/settings/institution-management/institutions'
                        },
                        {
                            title: 'Institutions Types',
                            link: '/settings/institution-management/institution-types'
                        },
                        {
                            title: 'Branches',
                            link: '/settings/institution-management/branches'
                        },
                    ]
                },

                {
                    title: 'Customers',
                    icon: "streamline:information-desk-customer-solid",
                    links: [
                        {
                            title: 'All Customers',
                            link: '/settings/customers/all',
                        },
                        {
                            title: 'Customer Types',
                            link: '/settings/customers/customer-types',
                        },
                        {
                            title: 'Identification Types',
                            link: '/settings/customers/identification-types',
                        },
                        {
                            title: 'Occupation',
                            link: '/settings/customers/occupations',
                        },
                    ],
                },
                {
                    title: "Users",
                    icon: "basil:user-solid",
                    links: [
                        {
                            title: 'All Users',
                            link: '/settings/user-management/users'
                        },
                        {
                            title: 'Roles',
                            link: '/settings/user-management/roles'
                        },
                        {
                            title: 'Permissions',
                            link: '/settings/user-management/permissions'
                        },
                    ]
                },
                {
                    title: "Tarrifs",
                    icon: "mdi:gear",
                    link: "/settings/tarrifs"
                },
                {
                    title: "Exchange Rates",
                    icon: "mdi:gear",
                    link: "/settings/exchange-rates"
                },
                {
                    title: "Currencies ",
                    icon: "mdi:gear",
                    link: "/settings/currencies"
                },
                {
                    title: "Banks",
                    icon: "mdi:gear",
                    link: "/settings/banks"
                },
                {
                    title: "Financial Interest",
                    icon: "mdi:gear",
                    link: "/general-setting/financial-interest"
                },
            ]
        }

    ]
    ;