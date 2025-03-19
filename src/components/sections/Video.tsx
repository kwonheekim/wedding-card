import Section from "@shared/Section";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import { FC } from "react";

const cx = classNames.bind(styles);

const Video: FC = () => {
  return (
    <Section className={cx("container")}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
};

export default Video;
