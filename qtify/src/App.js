import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/HeroSection/Hero";
// Import Card From "./Components/Card/Card";

import { fetchTopAlbum , fetchNewAlbum} from "./components/api/api";
import { useEffect,useState } from "react";
import Section from "./components/Section/Section";
// import { data } from "./components/mockData/topAlbum";
import styles from "./App.module.css"


function App() {

const[topAlbumData,setTopAlbumData]=useState([]);
const[newAlbumsData, setNewAlbumsData]=useState([]);

 const generateTopAlbumData= async ()=>{
const data= await fetchTopAlbum();
console.log(data);
setTopAlbumData(data);
 } 

 const generateNewAlbumsData = async () => {

  try {
    const data = await fetchNewAlbum()
    setNewAlbumsData(data);
   
  } catch (error) {
    console.error(error)
  }

};

 useEffect(()=>{
  generateTopAlbumData();
  generateNewAlbumsData();}
 ,[])


  return (
  <>
 <div className="App">
      <Navbar />
      <Hero/>
      <div className={styles.sectionWrapper}>
      <Section title="Top Albums" type="album" data={topAlbumData}/>
      <hr />
      <Section title="New Albums" type="album" data={newAlbumsData}/>
      </div>
      {/* {topAlbumData.length > 0 ? (
        <Card data={topAlbumData[0]} type="album" />
      ) : (
        <p>Loading...</p>
      )} */}

    </div>
  </>
  );
}

export default App;
