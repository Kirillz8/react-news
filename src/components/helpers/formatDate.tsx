import { useEffect, useState } from "react";
import { getMillisecondsUntilMidnight } from "./getMillisecondsUntilMidnight.ts";
import s from "../Header/Header.module.css";

export const FormatDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Таймаут на обновление даты в полночь
    const timeoutId = setTimeout(() => {
      setDate(new Date());

      // После обновления даты в первый раз, обновляем ее каждое 24 часа
      const intervalId = setInterval(
        () => {
          setDate(new Date());
        },
        24 * 60 * 60 * 1000,
      );

      // Чтобы корректно очистить интервал, привязываем его к return функции очистки
      return () => clearInterval(intervalId);
    }, getMillisecondsUntilMidnight());

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <p className={s.data}>
      {date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  );
};
