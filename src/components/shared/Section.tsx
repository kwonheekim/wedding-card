import { FC } from "react";
import classNames from "classnames/bind";
import style from "./Section.module.scss";

const cx = classNames.bind(style);
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className }) => {
  return <section className={cx(["container", className])}>{children}</section>;
};

export default Section;
