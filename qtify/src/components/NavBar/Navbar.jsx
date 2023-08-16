import React from 'react'
import Button from '../button/Button'
import Logo from '../Logo/Logo.jsx'
import Styles from "./Navbar.module.css"
import SearchBar from "../SearchBar/Search";

const Navbar = () => {
  return (
   <nav className={Styles.navbar}>
    <Logo/>
    <SearchBar placeholder={"Search a album you want to listen"}/>
    <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar


