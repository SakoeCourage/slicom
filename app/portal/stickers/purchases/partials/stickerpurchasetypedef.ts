export interface IStickerPurchaseDTO {
    invoice: string,
    date: string,
    quantityMotorVehicle: string,
    priceMotorVehicle: string,
    quantityMotorCyle: string,
    priceMotorCycle: string
    total: string,
    status: "Paid" | "Unpaid"
}

export const stickerPurchaseList: IStickerPurchaseDTO[] = [
    {
      invoice: "INV001",
      date: "2023-01-01",
      quantityMotorVehicle: "2",
      priceMotorVehicle: "50.00",
      quantityMotorCyle: "3",
      priceMotorCycle: "20.00",
      total: "190.00",
      status: "Paid",
    },
    {
      invoice: "INV002",
      date: "2023-01-05",
      quantityMotorVehicle: "1",
      priceMotorVehicle: "30.00",
      quantityMotorCyle: "2",
      priceMotorCycle: "15.00",
      total: "80.00",
      status: "Unpaid",
    },
    {
      invoice: "INV003",
      date: "2023-02-10",
      quantityMotorVehicle: "3",
      priceMotorVehicle: "45.00",
      quantityMotorCyle: "1",
      priceMotorCycle: "25.00",
      total: "130.00",
      status: "Paid",
    },
    {
      invoice: "INV004",
      date: "2023-02-15",
      quantityMotorVehicle: "1",
      priceMotorVehicle: "25.00",
      quantityMotorCyle: "4",
      priceMotorCycle: "30.00",
      total: "155.00",
      status: "Unpaid",
    },
    {
      invoice: "INV005",
      date: "2023-03-01",
      quantityMotorVehicle: "2",
      priceMotorVehicle: "40.00",
      quantityMotorCyle: "2",
      priceMotorCycle: "20.00",
      total: "120.00",
      status: "Paid",
    },
    {
      invoice: "INV006",
      date: "2023-03-05",
      quantityMotorVehicle: "3",
      priceMotorVehicle: "55.00",
      quantityMotorCyle: "1",
      priceMotorCycle: "15.00",
      total: "145.00",
      status: "Unpaid",
    },
    {
      invoice: "INV007",
      date: "2023-04-10",
      quantityMotorVehicle: "1",
      priceMotorVehicle: "35.00",
      quantityMotorCyle: "3",
      priceMotorCycle: "25.00",
      total: "160.00",
      status: "Paid",
    },
    {
      invoice: "INV008",
      date: "2023-04-15",
      quantityMotorVehicle: "2",
      priceMotorVehicle: "30.00",
      quantityMotorCyle: "2",
      priceMotorCycle: "20.00",
      total: "100.00",
      status: "Unpaid",
    },
    {
      invoice: "INV009",
      date: "2023-05-01",
      quantityMotorVehicle: "4",
      priceMotorVehicle: "40.00",
      quantityMotorCyle: "1",
      priceMotorCycle: "25.00",
      total: "185.00",
      status: "Paid",
    },
    {
      invoice: "INV010",
      date: "2023-05-05",
      quantityMotorVehicle: "2",
      priceMotorVehicle: "20.00",
      quantityMotorCyle: "3",
      priceMotorCycle: "30.00",
      total: "120.00",
      status: "Unpaid",
    },
  ];
  