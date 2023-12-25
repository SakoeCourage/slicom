import { Step } from "./stepper/steppertypes";
import { Step1, Step2, Step3 } from "./steps";
export const stepList: Step[] = [
  {
    label: "Client - Intermediary - Vehicle information",
    component: Step1,
  },
  {
    label: "Policy Information",
    component: Step2,
  },
  {
    label: "Premium Computation",
    component: Step3,
  },
];