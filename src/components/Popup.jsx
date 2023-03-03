import styles from "./Popup.module.css";
import { useRef } from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const Popup = ({ clickedImage, setOpen, open }) => {
  const ref = useRef();
console.log("popupban",clickedImage)
  const handleClick = () => {
    setOpen(!open);
  };

  const handleOutsideClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setOpen(!open);
    }
  };

  return (
    <>
      <div
        className={styles.cover}
        onClick={(e) => handleOutsideClick(e)}
      ></div>
      <div className={styles.popUp}>
        <div ref={ref} id={styles.cancelIconBckgr} onClick={handleClick}>
          <CancelIcon />
        </div>

        <img
          className={styles.image}
          src={`../../public/images/${clickedImage.technique}/${clickedImage.filename}`}
          alt=""
        />
      </div>
    </>
  );
};

export default Popup;
