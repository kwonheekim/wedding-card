import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames/bind";
import styles from "./ImageViewer.module.scss";
import { FC } from "react";
import "./swiper.css";
import "swiper/css";
import Dimmed from "../shared/Dimmed";

const cx = classNames.bind(styles);

interface ImageViewerProps {
  images: string[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
}

const ImageViewer: FC<ImageViewerProps> = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}) => {
  if (!open) {
    return null;
  }
  return (
    <Dimmed>
      <CloseButton className={cx("icon-close")} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <picture>
              <source srcSet={`${src}.webp`} type="image/webp" />
              <img src={`${src}.jpg`} alt={`이미지 ${idx}`} />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  );
};

const CloseButton: FC<{ onClose: () => void; className: string }> = ({
  onClose,
  className,
}) => {
  return (
    <svg
      className={className}
      height="24"
      id="svg8"
      version="1.1"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <defs id="defs2" />
      <g id="g1854" transform="translate(0,-290.65039)">
        <path
          d="m 12,292.65039 c -5.511,0 -10,4.489 -10,10 0,5.511 4.489,10 10,10 5.511,0 10,-4.489 10,-10 0,-5.511 -4.489,-10 -10,-10 z m 0,2 c 4.43012,0 8,3.56988 8,8 0,4.43012 -3.56988,8 -8,8 -4.43012,0 -8,-3.56988 -8,-8 0,-4.43012 3.56988,-8 8,-8 z"
          id="circle1840"
        />
        <path
          d="m 15.70679,298.94321 a 1,1 0 0 0 -1.41422,0 L 12,301.23579 9.70743,298.94321 a 1,1 0 0 0 -1.41422,0 1,1 0 0 0 0,1.41422 l 2.29258,2.29257 -2.29258,2.29257 a 1,1 0 0 0 0,1.41422 1,1 0 0 0 1.41422,0 L 12,304.06421 l 2.29258,2.29258 a 1,1 0 0 0 1.41421,0 1,1 0 0 0 0,-1.41422 l -2.29258,-2.29257 2.29258,-2.29257 a 1,1 0 0 0 0,-1.41422 z"
          id="path1842"
        />
      </g>
    </svg>
  );
};

export default ImageViewer;
