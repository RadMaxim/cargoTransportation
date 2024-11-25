import classButton from "./css/classButton.module.css";

import { memo } from "react";
import getImg from "./helper";

const Button = memo(
  ({ color, isIcon, w, h, text, type, numPicture, method }: {color: string,
    isIcon?: string,
    w: string,
    h: string,
    text?: string,
    type: "button" | "submit",
    numPicture?: boolean,
    method?: () => void;
  }) => {
    const iconsLink = getImg(isIcon)
      

    return (
      <button
        onClick={method}
        disabled={numPicture}
        type={type}
        className={`${classButton.button} ${classButton[color]} `}
        style={{maxWidth: w, height: h,padding:10 }}
        
      >
        <div className={classButton.button_container}>
          {isIcon ? <img src={iconsLink} alt="" /> : ""}
          {text ? <p>{text}</p> : ""}
        </div>
      </button>
    );
  },
);
export default Button;
