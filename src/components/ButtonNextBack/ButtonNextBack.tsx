import s from "./ButtonNextBack.module.scss";
interface Props {
  title?: string;
  conditionShow: boolean;
  onClickNext: () => void;
  onClickBack?: () => void;

  isEnableBackButton: boolean;
}

export default function ButtonNextBack({
  title = "Siguiente",
  conditionShow,
  onClickNext,
  isEnableBackButton,
  onClickBack,
}: Props) {
  return (
    <div className={s.container}>
      <button
        className={s.next}
        onClick={onClickNext}
        style={
          conditionShow
            ? { opacity: 1, transition: "all 0.5s" }
            : { opacity: 0, transition: "all 0.5s" }
        }
      >
        {title}
      </button>
      <button
        onClick={onClickBack}
        className={s.back}
        style={isEnableBackButton ? { opacity: 1 } : { opacity: 0 }}
      >
        Anterior
      </button>
    </div>
  );
}
