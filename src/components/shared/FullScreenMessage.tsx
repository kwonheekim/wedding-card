import { FC } from "react";
import styles from "./FullScreenMessage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FullScreenMessageProps {
  type: "loading" | "error";
}

const FullScreenMessage: FC<FullScreenMessageProps> = ({ type }) => {
  return (
    <div className={cx("container")}>
      {type === "loading" ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  );
};

const Heart = () => {
  return (
    <svg
      className={cx("ico-heart")}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  );
};

const Error = () => {
  return (
    <svg
      className={cx("ico-error")}
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M390.774,690a3.994,3.994,0,0,1,2.824,1.17l15.231,15.23A4,4,0,0,1,410,709.233v21.534a4,4,0,0,1-1.172,2.831L393.6,748.828A3.989,3.989,0,0,1,390.774,750H369.225a3.989,3.989,0,0,1-2.824-1.171l-15.23-15.23A3.994,3.994,0,0,1,350,730.767V709.233a4,4,0,0,1,1.173-2.832l15.23-15.23a3.994,3.994,0,0,1,2.824-1.17h21.549ZM395,729.951A3.406,3.406,0,0,1,395,734.77l-0.22.22a3.42,3.42,0,0,1-4.833,0l-8.764-8.755a1.71,1.71,0,0,0-2.417,0l-8.741,8.746a3.417,3.417,0,0,1-4.836,0l-0.194-.193a3.408,3.408,0,0,1,.017-4.842l8.834-8.735a1.7,1.7,0,0,0,0-2.43l-8.831-8.725a3.409,3.409,0,0,1-.018-4.844l0.193-.193a3.411,3.411,0,0,1,2.418-1c0.944,0,3.255,1.835,3.872,2.455l7.286,7.287a1.708,1.708,0,0,0,2.417,0l8.764-8.748a3.417,3.417,0,0,1,4.831,0L395,705.243a3.406,3.406,0,0,1,0,4.818l-8.727,8.737a1.7,1.7,0,0,0,0,2.407Z"
        id="error"
        transform="translate(-350 -690)"
      />
    </svg>
  );
};

export default FullScreenMessage;
