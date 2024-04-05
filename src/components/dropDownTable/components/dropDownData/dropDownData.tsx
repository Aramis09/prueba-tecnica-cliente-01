import s from "./dropDownData.module.scss";
import useChangeStyles from "../../../../hooks/useChangeStyles";
import { Service } from "../../../../interfaces/api.interfaces.d";
interface Props {
  itemsDropDown: Service[];
  buttonTitle?: string;
  onClick?: (service: Service) => void;
  showDropDown: boolean;
  serviceSelected?: Service;
}

const hidenStyle = {
  opacity: 0,
  position: "absolute",
};

const showStyle = {
  opacity: 1,
  transition: "all 0.5s",
};

export default function DropDownData({
  buttonTitle = "Seleccionar",
  itemsDropDown,
  onClick,
  showDropDown,
  serviceSelected,
}: Props) {
  const { stylesChosen } = useChangeStyles({
    condition: showDropDown,
    trueStyle: showStyle,
    falseStyle: hidenStyle,
  });

  return (
    <div
      className={s.container}
      style={typeof stylesChosen !== "string" ? stylesChosen : {}}
    >
      <ul style={typeof stylesChosen !== "string" ? stylesChosen : {}}>
        {itemsDropDown.map((item) => (
          <li key={Math.random()} className={s.containerService}>
            {item.name}
            <button
              onClick={() => onClick && onClick(item)}
              style={
                typeof stylesChosen !== "string" &&
                serviceSelected &&
                serviceSelected.id == item.id
                  ? {
                      ...stylesChosen,
                      backgroundColor: "#4a5d6b",
                      color: "white",
                    }
                  : {}
              }
            >
              {serviceSelected && serviceSelected.id == item.id
                ? "Seleccionado"
                : buttonTitle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
