import { useState } from "react";
import ItemTab from "../../../itemTab/itemTab";
import DropDownData from "../dropDownData/dropDownData";
import { Category, Service } from "../../../../interfaces/api.interfaces.d";
interface Props {
  item: Category;
  itemsDropDown: Service[];
  onClick: (service: Service) => void;
  icon?: string;
  buttonTitle?: string;
  serviceSelected?: Service;
}

export default function DropDownItemContainer({
  item,
  itemsDropDown,
  onClick,
  serviceSelected,
}: Props) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const hanlderShowDropDown = () => {
    if (showDropDown) {
      return setShowDropDown(false);
    }
    return setShowDropDown(true);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <ItemTab
        text={item.category}
        onClick={hanlderShowDropDown}
        changeIconFlag={showDropDown}
      />
      <DropDownData
        itemsDropDown={itemsDropDown}
        onClick={onClick}
        showDropDown={showDropDown}
        serviceSelected={serviceSelected}
      />
    </div>
  );
}
