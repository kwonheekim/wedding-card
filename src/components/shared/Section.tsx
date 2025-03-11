import React, { FC } from "react";
import classNames from "classnames/bind";
import style from "./Section.module.scss";

const cx = classNames.bind(style);
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children, className, title }) => {
  return (
    <section className={cx(["container", className])}>
      {title != null ? <div className={cx("txt-title")}>{title}</div> : null}
      {children}
    </section>
  );
};

export default Section;
