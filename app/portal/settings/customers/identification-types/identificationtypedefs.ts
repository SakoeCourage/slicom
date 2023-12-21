export interface IdentificationtypeScheme {
    code: string,
    name: string,
    createdAt: string
}

export const identificationtypeslist: IdentificationtypeScheme[] = [
    {
        code: "CT001",
        name: "National ID",
        createdAt: "12/12/2023"
    },
    {
        code: "CT002",
        name: "TIN",
        createdAt: "12/12/2023"
    },
]