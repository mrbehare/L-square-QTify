

import styles from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchSongsGenre, fetchTopAlbums } from "./components/api/api"
import BasicAccordion from "./components/FAQ/Accordion";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songGenreData, setSongGenreData] = useState([])
  const [songsData, setSongsData] = useState([]);
  const [filteredData,setFilteredData] = useState([])
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {

    setValue(newValue);
    
    
  };
  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setFilteredData(data);
      setSongsData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const generateSongsGenresData = async () => {

    try {
      const data = await fetchSongsGenre();
    
     setSongGenreData(data.data);
     
    } catch (error) {
      console.error(error)
    }
  
  };
  

  const generateSongsData=(value)=>{
    let key;
    if(value===0){
      setFilteredData(songsData);
      return;
    }
    else{
      key= songGenreData[value-1].key;
    }
    const result = songsData.filter((song)=>song.genre.key===key);
    setFilteredData(result);
  }

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumsData();
    generateAllSongsData();
    generateSongsGenresData()
    
  }, []);

  useEffect(()=>{
  generateSongsData(value)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  return (
    <div className="App">
      <Navbar  data={[...topAlbumsData,...newAlbumsData]}/>
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumsData} />
        <Section type="album" title="New Albums" data={newAlbumsData} />
        <Section type="song" title="Songs" data={filteredData} handleChange={handleChange} value={value} songGenreData={songGenreData}/>
        <BasicAccordion/>
      </div>
    </div>
  );
}

export default App;
