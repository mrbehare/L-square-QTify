import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const Section = ({ title, data, type ,handleChange,value,songGenreData}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

 
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.Section}>
      <div className={styles.header}>
        <h3> {title}</h3>
        <h4 className={styles.textToggle} onClick={handleToggle}>
        {type!=="song" && (carouselToggle ? "Show All" : "Colapse")}
        </h4>
      </div>
      {
        type==="song" && <BasicTabs handleChange={handleChange} value={value} songGenreData={songGenreData} />
      }
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel data={data}
              renderCardComponent={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
