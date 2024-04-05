import { useEffect, useState } from "react";

interface P {
  depedence?: unknown;
  falseStyle?: { readonly [key: string]: unknown } | string;
  trueStyle?: { readonly [key: string]: unknown } | string;
  condition: string | number | boolean;
}
const useChangeStyles = ({
  depedence,
  condition,
  falseStyle,
  trueStyle,
}: P) => {
  const [stylesChosen, setStylesChosen] = useState(falseStyle);
  useEffect(() => {
    if (condition) setStylesChosen(trueStyle);
    else setStylesChosen(falseStyle);
  }, [depedence, condition]);
  return { stylesChosen };
};

export default useChangeStyles;
