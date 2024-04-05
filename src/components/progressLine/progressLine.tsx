import { useEffect, useState } from "react";
import s from "./progressLine.module.scss";

interface Props {
  stepsNumber: number;
  currentStep: number;
  customheightPx?: number;
  title?: string;
}

export default function ProgressLine({
  currentStep = 0,
  stepsNumber,
  customheightPx,
  title,
}: Props) {
  const [widthAcumulator, setWithAcumulator] = useState<number>(0);
  const widthAsignedForStep = Math.ceil(100 / stepsNumber);

  useEffect(() => {
    setWithAcumulator(widthAsignedForStep * currentStep);
  }, [currentStep, widthAsignedForStep]);

  return (
    <div>
      <h4>{title}</h4>
      <div className={s.container}>
        <label
          htmlFor=""
          style={{ width: `${widthAcumulator}%`, height: customheightPx }}
        ></label>
      </div>
    </div>
  );
}
