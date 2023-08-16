import React from 'react'
import { ReactComponent as Vibratingheadphone } from "../../assets/Vibrating-headphone.svg";
import styles from "../../components/HeroSection/Hero.module.css"

const Hero = () => {
  return (
    <div   className={styles.div}>
    <div className={styles.text} >
    <h1 >100 Thousand Songs,ad-free</h1>
    <h1>Over thousands podcast episodes</h1>
    </div>
    <div>
    <Vibratingheadphone/>
    </div>
    </div>
  )
}

export default Hero
