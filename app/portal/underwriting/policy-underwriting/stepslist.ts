import { Step } from "./stepper/steppertypes";
import { Step1, Step2, Step3 } from "./steps";
export const stepList: Step[] = [
  {
    label: "Step 1",
    component: Step1,
  },
  {
    label: "Step 2",
    component: Step2,
  },
  {
    label: "Step 3",
    component: Step3,
  },
];