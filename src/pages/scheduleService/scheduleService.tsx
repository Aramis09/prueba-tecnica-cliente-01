import s from "./scheduleService.module.scss";
import DropDownTable from "../../components/dropDownTable/dropDownTable";
import ProgressLine from "../../components/progressLine/progressLine";
import { useContext, useState } from "react";
import { useMakeRequest } from "../../hooks/useMakeRequest";
import {
  GetScheduleByService,
  GetServiceByCategory,
} from "../../interfaces/api.interfaces.d";
import { GlobalStateContext } from "../../contexts/states";
import ButtonNextBack from "../../components/ButtonNextBack/ButtonNextBack";
import ScheduleOptions from "../../components/scheduleOptions/scheduleOptions";
import Confirm from "../../components/confirm/confirm";

export default function ScheduleService() {
  const {
    curentStep,
    setCurrentStep,
    serviceSelected,
    scheduleSelected, //!creoq que estos no hace falta que sean globales ya que se puede acceder facilmente de los otros componentes que lo necesitan
    setScheduleSelected,
  } = useContext(GlobalStateContext);
  const [slots, setSlots] = useState<GetScheduleByService>();
  const [dateSelected, setDateSelected] = useState<string>("");
  const [titleProgress, setTitleProgress] = useState<string>(
    "Seleccionar Servicio"
  );

  const { result, makeNewRequest } = useMakeRequest<GetServiceByCategory>({
    url: `${import.meta.env.VITE_SOME_BASE_URL}/services`,
  });

  const hanlderSelectSchedule = async (
    sheduleSelected: string,
    dateSelected: string
  ) => {
    setScheduleSelected && setScheduleSelected(sheduleSelected);
    setCurrentStep && setCurrentStep(3);
    setDateSelected(dateSelected);
  };

  const handlerNextStep12 = async () => {
    const slots = await makeNewRequest<GetScheduleByService>({
      url: `${import.meta.env.VITE_SOME_BASE_URL}/slots?id${
        //!La idea es mandar el id para que traiga  los horarios especificos del servicio, pero como no tengo suficiente info en el json siempre trae los mismo horarios.
        serviceSelected?.id
      }`,
    });
    setSlots(slots);
    setCurrentStep && setCurrentStep(2);
    setTitleProgress("Seleccionar horario");
  };
  const handlerNextStep23 = () => {
    setCurrentStep && setCurrentStep(4);
    setTitleProgress("Confirmar Turno");
  };
  const hanlderNextFinalStep5 = () => {
    window.location.href = "https://aramis-jaime-portfolio.vercel.app/";
  };

  if (!result) return <>Server Error please reload page...</>;
  return (
    <div className={s.container}>
      <ProgressLine
        stepsNumber={5}
        currentStep={curentStep || 0}
        title={titleProgress}
      />
      {curentStep === 1 || curentStep === 0 ? (
        <>
          <DropDownTable title="Categorias" items={result.catgories} />
          <ButtonNextBack
            conditionShow={!!serviceSelected && serviceSelected.name !== ""}
            onClickNext={handlerNextStep12}
            isEnableBackButton={false}
          />
        </>
      ) : (
        <></>
      )}

      {curentStep === 2 || curentStep === 3 ? (
        <>
          <ScheduleOptions
            title="Proximos turnos disponibles"
            options={slots}
            onClick={hanlderSelectSchedule}
            scheduleSelected={scheduleSelected}
          />
          <ButtonNextBack
            conditionShow={!!scheduleSelected && scheduleSelected !== ""}
            onClickNext={handlerNextStep23}
            isEnableBackButton={true}
            onClickBack={() =>
              setCurrentStep && setCurrentStep((prev) => prev - 1)
            }
          />
        </>
      ) : (
        <></>
      )}

      {curentStep === 4 || curentStep === 5 ? (
        <>
          <Confirm
            scheduleSelected={scheduleSelected}
            serviceNameSelected={serviceSelected?.name}
            dateSelected={dateSelected}
          />
          <ButtonNextBack
            conditionShow={!!scheduleSelected && scheduleSelected !== ""}
            onClickNext={hanlderNextFinalStep5}
            isEnableBackButton={true}
            title="Confirmar"
            onClickBack={() =>
              setCurrentStep && setCurrentStep((prev) => prev - 1)
            }
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
