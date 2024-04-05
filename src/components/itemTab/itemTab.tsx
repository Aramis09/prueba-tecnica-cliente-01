import s from "./itemTab.module.scss";
import plusIcon from "../../assets/icons/plus.svg";
import dashIcon from "../../assets/icons/dash.svg";

interface Props {
  text: string;
  onClick: () => void;
  icon?: string;
  iconOption?: string;
  changeIconFlag?: boolean;
}

export default function ItemTab({
  text,
  icon = plusIcon,
  iconOption = dashIcon,
  changeIconFlag = false,
  onClick,
}: Props) {
  return (
    <div className={s.container}>
      <p>{text}</p>
      <img
        src={changeIconFlag ? iconOption : icon}
        alt="icon"
        onClick={onClick}
      />
    </div>
  );
}
