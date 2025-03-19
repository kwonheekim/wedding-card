import Section from "@shared/Section";
import classNames from "classnames/bind";
import styles from "./ImageGallery.module.scss";
import { FC, useState } from "react";
import ImageViewer from "../imageViewer";

interface ImageGalleryProps {
  images: string[];
}

const cx = classNames.bind(styles);

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const open = selectedIdx > -1;

  const handleSlectImage = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(-1);
  };
  return (
    <>
      <Section title="사진첩">
        <ul className={cx("wrap-images")}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx("wrap-image")}
              onClick={() => handleSlectImage(idx)}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt={`이미지 ${idx}`} />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  );
};

export default ImageGallery;
