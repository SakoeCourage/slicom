
export type InstitutionTypes = "Broker" | "Service Provider" | "Insurance Company" | "Agent"

export interface intsitutionSchema {
    name: string,
    institutionType: InstitutionTypes,
    contactPerson: string,
    contactPhone: string,
    createdAt: string
}


export const institutionList: intsitutionSchema[] = [
    {
        name: "ABC institution company",
        institutionType: 'Insurance Company',
        contactPerson: "Mary Jane",
        contactPhone: "2330204323232",
        createdAt: "August 15, 2023 : 12:01:07 PM"
    },
    {
        name: "XYZ Brokerage",
        institutionType: 'Broker',
        contactPerson: "John Doe",
        contactPhone: "1234567890",
        createdAt: "August 16, 2023 : 02:30:45 PM"
    },
    {
        name: "Service Hub Inc.",
        institutionType: 'Service Provider',
        contactPerson: "Alice Smith",
        contactPhone: "9876543210",
        createdAt: "August 17, 2023 : 10:45:22 AM"
    },
    {
        name: "PQR Insurance Solutions",
        institutionType: 'Insurance Company',
        contactPerson: "Bob Johnson",
        contactPhone: "5551112222",
        createdAt: "August 18, 2023 : 08:15:30 AM"
    },
    {
        name: "Greenfield Services",
        institutionType: 'Service Provider',
        contactPerson: "Eva Green",
        contactPhone: "4443336666",
        createdAt: "August 19, 2023 : 04:20:10 PM"
    },
    {
        name: "LMN Brokerage Services",
        institutionType: 'Broker',
        contactPerson: "Mark Taylor",
        contactPhone: "7778889999",
        createdAt: "August 20, 2023 : 01:55:18 PM"
    }
];



