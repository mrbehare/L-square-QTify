import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" />
              <div className={styles.banner}>
              <Chip
                label={`${follows} follows`}
                size="small"
                className={styles.chip}
              />
            </div>
            </div>

            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;