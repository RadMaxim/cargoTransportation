import calculate from "./../../../public/icons/Calculate.svg";
import phone from "./../../../public/icons/Phone.svg";
import plus from "./../../../public/icons/Plus.svg";
import minus from "./../../../public/icons/minus.svg";
import galya from "./../../../public/icons/galya.svg";
import pagL from "./../../../public/icons/PaginLeft.svg";
import pagR from "./../../../public/icons/PaginRight.svg";
import pagLLight from "./../../../public/icons/leftLight.svg";
import pagRLight from "./../../../public/icons/rightLight.svg";
const getImg = (isIcon?:string)=>{
    switch (isIcon) {
      case "calculate":return calculate;
      case "phone":return phone;
      case "plus":return plus;
      case "minus":return minus;
      case "galya":return galya;
      case "pagL":return pagL;
      case "pagR":return pagR;
      case "pagRLight":return pagRLight;
      case "pagLLight":return pagLLight;
      default: return "";
    }
}
export default getImg;