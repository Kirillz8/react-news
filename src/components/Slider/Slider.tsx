import { cloneElement, type ReactElement, type Ref, useRef } from "react";
import s from "./Slider.module.css";

interface SliderChildProps {
  // если есть другие пропсы, можно их сюда добавить
  ref?: Ref<HTMLElement>;
}

interface Props {
  children: ReactElement<SliderChildProps>;
  step?: number;
}

export const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={s.slider}>
      <button onClick={scrollLeft} className={s.arrow}>
        {"<"}
      </button>
      {cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={s.arrow}>
        {">"}
      </button>
    </div>
  );
};
