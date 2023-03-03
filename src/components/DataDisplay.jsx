import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "./Popup";
import { Skeleton } from "@mui/material";
import styles from "./DataDisplay.module.css";
import { useOutletContext } from "react-router-dom";

const DataDisplay = ({ urlEnding, data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState({});
  const [loadedImages, setLoadedImages] = useState([]);

  const { windowWidth } = useOutletContext();

  const handleClick = (image) => {
    setClickedImage(image);
    setOpen(!open);
  };
console.log(clickedImage)
  const handleOnload = (filename) => {
    setLoadedImages((prev) => [...prev, filename]);
  };

  useEffect(() => {
    if (data.length === loadedImages.length && data.length !== 0) {
      setIsLoading(false);
    }
  }, [loadedImages]);

  return (
    <div className={styles.dataDisplayContainer}>
      {data.map((image, i) => (
        <div
          key={i}
          className={styles.imageContainer}
          onClick={(e) => handleClick(image)}
        >
          {isLoading && (
            <Skeleton variant="rectangular">
              <img
                className={styles.images}
                src={`/images/${image.technique}/${image.filename}`}
                alt=""
              />
            </Skeleton>
          )}

          <img
            style={{ display: isLoading ? "none" : "block" }}
            onLoad={() => handleOnload(image.filename)}
            className={styles.images}
            src={`/images/${image.technique}/${image.filename}`}
            alt=""
          />
        </div>
      ))}

      {windowWidth > 767 && open && (
        <Popup {...{ clickedImage, setOpen, open }} />
      )}
    </div>
  );
};

export default DataDisplay;
