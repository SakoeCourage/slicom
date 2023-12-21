export interface Ioccupationtype {
    code: string,
    name: string,
    createdAt: string
}

export const occupationList: Ioccupationtype[] = [
    {
        code: "OC01",
        name: "Self Employed",
        createdAt: "12/12/2023"
    },
    {
        code: "OC02",
        name: "Public Servant",
        createdAt: "12/12/2023"
    },
    {
        code: "OC03",
        name: "Others",
        createdAt: "12/12/2023"
    },
]