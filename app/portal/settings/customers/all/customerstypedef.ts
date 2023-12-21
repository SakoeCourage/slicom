export interface IBaseCustomer {
    number: string,
    identitificationNumber: string,
    customerFullName: string,
    email: string,
}

export type IndividualCustomer = IBaseCustomer & {
    customerType: "Individual",
    identitificationType: "Passport" | "Drivers License",
}

export type CorporateCustomer = IBaseCustomer & {
    customerType: "Corporate",
    identitificationType: "Tin",
}

export type customerScheme = IndividualCustomer | CorporateCustomer

export const customerList: customerScheme[] = [
    {
        customerType: 'Individual',
        number: "SLICOM000328",
        identitificationType: "Drivers License",
        identitificationNumber: "1805303",
        customerFullName: "Sk Ceejay Courage ",
        email: 'skjaykey@gmail.com'

    },
    {
        customerType: 'Individual',
        number: "SLICOM000132",
        identitificationType: "Passport",
        identitificationNumber: "P18053A03",
        customerFullName: "Kabutey Jackson ",
        email: 'kjackson@gmail.com'
    },
    {
        customerType: 'Corporate',
        number: "SLICOM000154",
        identitificationType: "Tin",
        identitificationNumber: "3289239",
        customerFullName: "FullHouse Ins. Lmtd ",
        email: 'fhuzinsurance@gmail.com'
    },
    {
        customerType: 'Individual',
        number: "SLICOM000246",
        identitificationType: "Drivers License",
        identitificationNumber: "9845621",
        customerFullName: "Jane Doe",
        email: 'janedoe@gmail.com'
    },
    {
        customerType: 'Corporate',
        number: "SLICOM000387",
        identitificationType: "Tin",
        identitificationNumber: "7543210",
        customerFullName: "XYZ Corporation",
        email: 'xyzcorp@gmail.com'
    }

]