import classNames from "classnames/bind";
import styles from "./Dimmed.module.scss";
import { FC } from "react";

const cx = classNames.bind(styles);

interface DimmedProps {
  children?: React.ReactNode;
}

const Dimmed: FC<DimmedProps> = ({ children }) => {
  return <div className={cx("dimmed")}>{children}</div>;
};

export default Dimmed;
