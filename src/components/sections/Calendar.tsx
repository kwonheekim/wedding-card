import { FC, memo } from "react";
import classNames from "classnames/bind";
import styles from "./Calendar.module.scss";
import Section from "@shared/Section";
import { parseISO, format } from "date-fns";
import { ko } from "date-fns/locale";
import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker";

const cx = classNames.bind(styles);

interface CalendarProps {
  date: string;
}
const css = `
    .rdp-nav {
        display: none;
    }
    .rdp-day {
        cursor: default;
    }
  `;

const Calendar: FC<CalendarProps> = ({ date }) => {
  const weddingDate = parseISO(date);

  return (
    <Section
      title={
        <div className={cx("wrap-header")}>
          <span className={cx("txt-date")}>
            {format(weddingDate, "yyyy.mm.dd")}
          </span>
          <span className={cx("txt-time")}>
            {format(weddingDate, "aaa h시 eeee", { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx("wrap-calendar")}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => "" }}
        />
      </div>
    </Section>
  );
};

export default memo(Calendar);
