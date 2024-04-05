import { createContext, useState } from "react";
import { Service } from "../interfaces/api.interfaces.d";
// type StepNames = "" | "service" | "schedule" | "confirm";

interface State {
  serviceSelected?: Service;
  setServiceSelected?: React.Dispatch<
    React.SetStateAction<Service | undefined>
  >;
  curentStep?: number;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  scheduleSelected?: string;
  setScheduleSelected?: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalStateContext = createContext<State>({});

interface Props {
  children: JSX.Element;
}
export const GlobalStateProvider = ({ children }: Props) => {
  const [serviceSelected, setServiceSelected] = useState<Service>();
  const [curentStep, setCurrentStep] = useState<number>(0);
  const [scheduleSelected, setScheduleSelected] = useState<string>("");

  return (
    <GlobalStateContext.Provider
      value={{
        serviceSelected,
        setServiceSelected,
        curentStep,
        setCurrentStep,
        scheduleSelected,
        setScheduleSelected,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
