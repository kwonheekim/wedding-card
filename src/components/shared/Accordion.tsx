import classNames from "classnames/bind";
import styles from "./Accordion.module.scss";
import { FC, useState } from "react";

const cx = classNames.bind(styles);

interface AccordionProps {
  label: string;
  children?: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ label, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={cx(["wrap-accoridon", expanded ? "open" : ""])}>
      <div className={cx("wrap-header")} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx("ico-arrow-down")} />
      </div>
      <div className={cx("wrap-content")}>{children}</div>
    </div>
  );
};

const IconArrowDown = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
    >
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  );
};

export default Accordion;
