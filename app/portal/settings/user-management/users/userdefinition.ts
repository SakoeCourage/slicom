export interface IuserScheme {
    firstName: string,
    lastName: string,
    email:string,
    institution:string,
    status: "Active" | "Inactive"
}

export const usersList: IuserScheme[] = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      institution: "ABC Corporation",
      status: "Active",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      institution: "XYZ Ltd.",
      status: "Inactive",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      institution: "DEF Industries",
      status: "Active",
    },
    {
      firstName: "Eva",
      lastName: "Williams",
      email: "eva.williams@example.com",
      institution: "GHI Corporation",
      status: "Inactive",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      institution: "JKL Ltd.",
      status: "Active",
    },
    {
      firstName: "Sophia",
      lastName: "Miller",
      email: "sophia.miller@example.com",
      institution: "MNO Industries",
      status: "Active",
    },
    {
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      institution: "PQR Corporation",
      status: "Inactive",
    },
    {
      firstName: "Emma",
      lastName: "Anderson",
      email: "emma.anderson@example.com",
      institution: "STU Ltd.",
      status: "Active",
    },
    {
      firstName: "James",
      lastName: "Taylor",
      email: "james.taylor@example.com",
      institution: "VWX Industries",
      status: "Inactive",
    },
    {
      firstName: "Olivia",
      lastName: "Moore",
      email: "olivia.moore@example.com",
      institution: "YZA Corporation",
      status: "Active",
    },
  ];
  