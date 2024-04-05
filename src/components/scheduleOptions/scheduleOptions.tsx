import s from "./scheduleOptions.module.scss";
import { GetScheduleByService } from "../../interfaces/api.interfaces.d";
interface Props {
  options?: GetScheduleByService;
  title: string;
  onClick: (schedule: string, dateSelected: string) => void;
  scheduleSelected?: string;
}
export default function ScheduleOptions({
  scheduleSelected,
  onClick,
  title,
  options,
}: Props) {
  if (!options) return <>No hay turnos...</>;
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <p>{options.date}</p>
      <div className={s.containerOptions}>
        {options.availableTimeslots.map((optionSchedule) => (
          <p
            onClick={() => onClick(optionSchedule, options.date)}
            className={s.option}
            key={Math.random()}
            style={
              scheduleSelected === optionSchedule
                ? { backgroundColor: "#4a5d6b", color: "white" }
                : {}
            }
          >
            {optionSchedule}
          </p>
        ))}
      </div>
    </div>
  );
}
