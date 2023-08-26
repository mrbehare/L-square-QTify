import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import styles from "./Search.module.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";




const SearchBar = ({placeholder,data }) => {
  console.log(data)
  return (
  
      <div className={styles.wrapper}>
        {/* <input className={styles.search} placeholder={placeholder}/> */}
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option)=>option.title)}
       

        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
  
  );
};

export default SearchBar;
