export interface Icustomertype {
    code: string,
    name: string,
    createdAt: string
}

export const customertypeslist: Icustomertype[] = [
    {
        code: "CT001",
        name: "Individual",
        createdAt: "12/12/2023"
    },
    {
        code: "CT002",
        name: "Corporate",
        createdAt: "12/12/2023"
    },
]