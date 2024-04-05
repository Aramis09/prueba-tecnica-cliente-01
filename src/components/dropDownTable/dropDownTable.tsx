import s from "./dropDownTable.module.scss";
import DropDownItemContainer from "./components/dropDownItemContaniner/dropDownItemContainer";
import { Category, Service } from "../../interfaces/api.interfaces.d";
import { GlobalStateContext } from "../../contexts/states";
import { useContext } from "react";
interface Props {
  items: Category[]; //!deberia de contener los items del dropdwon para poder mostrar individualmente cada uno
  title: string;
}
export default function DropDownTable({ title, items }: Props) {
  const { serviceSelected, setServiceSelected, setCurrentStep } =
    useContext(GlobalStateContext);

  const hanlderSelectItem = (serviceForSelect: Service) => {
    if (setServiceSelected && serviceForSelect) {
      setServiceSelected(serviceForSelect);
      setCurrentStep && setCurrentStep(1);
    }
  };

  return (
    <div className={s.container}>
      <h4>{title}</h4>
      {items.map((item) => (
        <DropDownItemContainer
          key={Math.random()}
          item={item}
          itemsDropDown={item.services}
          onClick={hanlderSelectItem}
          serviceSelected={serviceSelected}
        />
      ))}
    </div>
  );
}
