import s from "./confirm.module.scss";
interface Props {
  scheduleSelected?: string;
  serviceNameSelected?: string;
  dateSelected?: string;
}
export default function Confirm({
  scheduleSelected,
  serviceNameSelected,
  dateSelected,
}: Props) {
  return (
    <div className={s.container}>
      <p>Servicio: {serviceNameSelected}</p>
      <p>Fecha: {`${dateSelected} ${scheduleSelected}`}</p>
    </div>
  );
}
