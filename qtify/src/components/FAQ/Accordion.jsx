import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function BasicAccordion() {
  return (
    <>
      <Typography className={styles.Faq}>FAQs</Typography>
      <div
      className={styles.divAcc}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "center ",
        // }}
      >
        <Accordion className={styles.accordionMain}>
          <AccordionSummary
            className={styles.accordionHeading}
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={`${styles.typoMui} ${styles.accorTypoHeading}`}
            >
              is QTify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionContent} >
            <Typography
              className={`${styles.typoMui} ${styles.accorTypoContent}`}
            >
              Yes! It is 100% free, and has 0% ads.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={styles.accordionMain}>
          <AccordionSummary
            className={styles.accordionHeading}
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={`${styles.typoMui} ${styles.accorTypoHeading}`}
            >
              Can i download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionContent}>
            <Typography
              className={`${styles.typoMui} ${styles.accorTypoContent}`}
            >
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
