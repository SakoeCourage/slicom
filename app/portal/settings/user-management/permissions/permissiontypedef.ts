export interface IpermissionScheme {
    name: string,
    createdAt: string,
}

export const permissionsList: IpermissionScheme[] = [
    {
        name: "Edit User",
        createdAt: "12/32/2020"
    },
    {
        name: "Create Claim",
        createdAt: "12/32/2020"
    },
    {
        name: "Remove User",
        createdAt: "12/32/2020"
    },
]