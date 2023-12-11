

type routestypedef = {
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

type routesWitSections = {
    sectionName: string,
    routes: routestypedef[]
}[]
export let sidebarRoutes: routesWitSections =
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
                    title: "Pen management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Pens',
                        link: '/pen/all',

                    }]
                },
                {
                    title: "Flock management",
                    icon: "mingcute:grid-fill",
                    links: [

                        {
                            title: 'Flocks',
                            link: '/flock/all',
                        },
                        {
                            title: 'Flock control data',
                            link: '/flock/control/data',

                        },
                        {
                            title: 'Compare flock',
                            link: '/flock/compare',
                        },
                        {
                            title: 'Grading',
                            link: '/flock/products/grade',
                        }
                    ],
                },
                {
                    title: "Farm management",
                    icon: "mingcute:grid-fill",
                    links: [

                        {
                            title: 'Farm Activities',
                            link: '/farmmanagement/farmactivities',
                        },
                        {
                            title: 'Activity Planner',
                            link: '/farmmanagement/activityplanner',
                        }
                    ],
                },
                {
                    title: 'Expense',
                    icon: "mingcute:grid-fill",
                    link: '/expenses',
                },
                {
                    title: "Stock management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Daily overview',
                        link: '/stock/daily',

                    },
                    {
                        title: 'Manage stock',
                        link: '/stock/manage',
                    }]
                },
                {
                    title: "Sale management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Product orders',
                        link: '/salemanagement/newsale',
                    },
                    {
                        title: 'Make payment',
                        link: '/invoice/all',
                    },
                    {
                        title: 'Payments history',
                        link: '/payments/all',
                    }
                    ]
                },
                {
                    title: "Report",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'new report',
                        link: '/report/new',
                    },
                    ]
                },
                {
                    title: "User management",
                    icon: "mingcute:grid-fill",
                    links: [
                        {
                            title: 'All users',
                            link: '/user/all',
                        },
                        {
                            title: ' Onboard a user',
                            link: '/user/create',
                        }
                    ]
                },
                {
                    title: 'System definition',
                    icon: "mingcute:grid-fill",
                    link: '/system/definitions',
                },

            ]
        },
        {
            sectionName: "Advance",
            routes: [
                {
                    title: 'Dashboard',
                    icon: "mingcute:grid-fill",
                    link: '/dashboard',
                },
                {
                    title: "Pen management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Pens',
                        link: '/pen/all',

                    }]
                },
                {
                    title: "Flock management",
                    icon: "mingcute:grid-fill",
                    links: [

                        {
                            title: 'Flocks',
                            link: '/flock/all',
                        },
                        {
                            title: 'Flock control data',
                            link: '/flock/control/data',

                        },
                        {
                            title: 'Compare flock',
                            link: '/flock/compare',
                        },
                        {
                            title: 'Grading',
                            link: '/flock/products/grade',
                        }
                    ],
                },
                {
                    title: "Farm management",
                    icon: "mingcute:grid-fill",
                    links: [

                        {
                            title: 'Farm Activities',
                            link: '/farmmanagement/farmactivities',
                        },
                        {
                            title: 'Activity Planner',
                            link: '/farmmanagement/activityplanner',
                        }
                    ],
                },
                {
                    title: 'Expense',
                    icon: "mingcute:grid-fill",
                    link: '/expenses',
                },
                {
                    title: "Stock management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Daily overview',
                        link: '/stock/daily',

                    },
                    {
                        title: 'Manage stock',
                        link: '/stock/manage',
                    }]
                },
                {
                    title: "Sale management",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'Product orders',
                        link: '/salemanagement/newsale',
                    },
                    {
                        title: 'Make payment',
                        link: '/invoice/all',
                    },
                    {
                        title: 'Payments history',
                        link: '/payments/all',
                    }
                    ]
                },
                {
                    title: "Report",
                    icon: "mingcute:grid-fill",
                    links: [{
                        title: 'new report',
                        link: '/report/new',
                    },
                    ]
                },
                {
                    title: "User management",
                    icon: "mingcute:grid-fill",
                    links: [
                        {
                            title: 'All users',
                            link: '/user/all',
                        },
                        {
                            title: ' Onboard a user',
                            link: '/user/create',
                        }
                    ]
                },
                {
                    title: 'System definition',
                    icon: "mingcute:grid-fill",
                    link: '/system/definitions',
                },

            ]
        }

    ]
    ;