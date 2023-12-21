export interface IBrancesSchema {
    name: string,
    institutionName: string,
    contactPerson: string,
    contactPhone: string,
    createdAt: string,
    code: string,
}

export const branchesList: IBrancesSchema[] = [
    {
        name: "Head Office",
        institutionName: 'ABC institution company',
        contactPerson: "Brown Jane",
        contactPhone: "2330204323232",
        createdAt: "August 15, 2023 : 12:01:07 PM",
        code: "012"
    },
    {
        name: "Miami Street Office",
        institutionName: 'Greenfield Services',
        contactPerson: "Micheal Dough",
        contactPhone: "289329839289",
        createdAt: "August 18, 2023 : 12:01:07 PM",
        code: "021"
    },
    {
        name: "Downtown Branch",
        institutionName: 'XYZ Brokerage',
        contactPerson: "Sarah Anderson",
        contactPhone: "9876543210",
        createdAt: "August 20, 2023 : 10:30:45 AM",
        code: "022"
    },
    {
        name: "Tech Park Branch",
        institutionName: 'Service Hub Inc.',
        contactPerson: "Alex Turner",
        contactPhone: "5554447777",
        createdAt: "August 22, 2023 : 02:15:30 PM",
        code: "43"
    },
    {
        name: "Financial District Office",
        institutionName: 'LMN Brokerage Services',
        contactPerson: "Chris Evans",
        contactPhone: "1112223333",
        createdAt: "August 24, 2023 : 04:45:22 PM",
        code: "323"
    },
    {
        name: "Westside Branch",
        institutionName: 'PQR Insurance Solutions',
        contactPerson: "Emma Watson",
        contactPhone: "8889990000",
        createdAt: "August 26, 2023 : 09:20:10 AM",
        code: "231"
    }
];
