export interface IPolicyDTO {
    number: string,
    customerName: string,
    coverType: "Comprehensive" | "Fire and Theft" | "Third Party",
    schedule: string,
    vehicleRegistration: string,
    makeModel: string,
    company: string,
    inception: string,
    expiry: string,
    sumInsured: string,
    premium: string,
    status: "Pending" | "Canceled" | "Approved"
}

export const policiesList: IPolicyDTO[] = [
    {
        number: "IIC-1703245157687",
        customerName: "ZAINAB IBRAHIM",
        coverType: "Comprehensive",
        schedule: "Pivate Individual",
        vehicleRegistration: "AVH 024",
        makeModel: "MITSUBISHI JEEP",
        company: "International Insurance Company (SL) Limited",
        inception: "06-Dec-2023",
        expiry: "05-Dec-2024",
        sumInsured: "866120.00",
        premium: "59423.8500000",
        status: "Pending"
    },
    {
        number: "IIC-1703245157688",
        customerName: "JOHN DOE",
        coverType: "Fire and Theft",
        schedule: "Pivate Individual",
        vehicleRegistration: "XYZ 789",
        makeModel: "TOYOTA SEDAN",
        company: "National Insurance Corp",
        inception: "10-Jan-2023",
        expiry: "09-Jan-2024",
        sumInsured: "500000.00",
        premium: "35000.00",
        status: "Approved",
      },
      {
        number: "IIC-1703245157689",
        customerName: "ALICE SMITH",
        coverType: "Third Party",
        schedule: "Business Use",
        vehicleRegistration: "ABC 123",
        makeModel: "HONDA COUPE",
        company: "Global Insurance Ltd",
        inception: "15-Feb-2023",
        expiry: "14-Feb-2024",
        sumInsured: "300000.00",
        premium: "25000.00",
        status: "Pending",
      },
      // ... (add 8 more entries)
      {
        number: "IIC-1703245157690",
        customerName: "SAMUEL JACKSON",
        coverType: "Comprehensive",
        schedule: "Pivate Individual",
        vehicleRegistration: "JKL 456",
        makeModel: "FORD SUV",
        company: "ABC Insurance Agency",
        inception: "20-Mar-2023",
        expiry: "19-Mar-2024",
        sumInsured: "750000.00",
        premium: "50000.00",
        status: "Canceled",
      },
      {
        number: "IIC-1703245157691",
        customerName: "EMMA WILLIAMS",
        coverType: "Fire and Theft",
        schedule: "Pivate Individual",
        vehicleRegistration: "DEF 789",
        makeModel: "BMW CONVERTIBLE",
        company: "XYZ Insurance Group",
        inception: "25-Apr-2023",
        expiry: "24-Apr-2024",
        sumInsured: "600000.00",
        premium: "40000.00",
        status: "Approved",
      },
      {
        number: "IIC-1703245157692",
        customerName: "DAVID MARTIN",
        coverType: "Third Party",
        schedule: "Business Use",
        vehicleRegistration: "GHI 101",
        makeModel: "MERCEDES VAN",
        company: "City Insurance Services",
        inception: "30-May-2023",
        expiry: "29-May-2024",
        sumInsured: "400000.00",
        premium: "30000.00",
        status: "Pending",
      },
      {
        number: "IIC-1703245157693",
        customerName: "SARAH BROWN",
        coverType: "Comprehensive",
        schedule: "Pivate Individual",
        vehicleRegistration: "LMN 202",
        makeModel: "VOLKSWAGEN HATCHBACK",
        company: "EFG Insurance Solutions",
        inception: "05-Jun-2023",
        expiry: "04-Jun-2024",
        sumInsured: "550000.00",
        premium: "45000.00",
        status: "Pending",
      },
      {
        number: "IIC-1703245157694",
        customerName: "MICHAEL WILSON",
        coverType: "Fire and Theft",
        schedule: "Pivate Individual",
        vehicleRegistration: "OPQ 303",
        makeModel: "CHEVROLET TRUCK",
        company: "JKL Insurance Brokers",
        inception: "10-Jul-2023",
        expiry: "09-Jul-2024",
        sumInsured: "700000.00",
        premium: "55000.00",
        status: "Canceled",
      },
      {
        number: "IIC-1703245157695",
        customerName: "OLIVIA JONES",
        coverType: "Third Party",
        schedule: "Business Use",
        vehicleRegistration: "RST 404",
        makeModel: "LEXUS SUV",
        company: "MNO Insurance Agency",
        inception: "15-Aug-2023",
        expiry: "14-Aug-2024",
        sumInsured: "450000.00",
        premium: "35000.00",
        status: "Approved",
      },
      {
        number: "IIC-1703245157696",
        customerName: "CHARLES MILLER",
        coverType: "Comprehensive",
        schedule: "Pivate Individual",
        vehicleRegistration: "UVW 505",
        makeModel: "NISSAN PICKUP",
        company: "PQR Insurance Ltd",
        inception: "20-Sep-2023",
        expiry: "19-Sep-2024",
        sumInsured: "650000.00",
        premium: "50000.00",
        status: "Pending",
      },
      {
        number: "IIC-1703245157697",
        customerName: "GRACE ANDERSON",
        coverType: "Fire and Theft",
        schedule: "Pivate Individual",
        vehicleRegistration: "XYZ 606",
        makeModel: "TOYOTA HATCHBACK",
        company: "ABC Insurance Corp",
        inception: "25-Oct-2023",
        expiry: "24-Oct-2024",
        sumInsured: "800000.00",
        premium: "60000.00",
        status: "Approved",
      }
]