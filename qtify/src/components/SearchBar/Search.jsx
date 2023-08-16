import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import styles from "./Search.module.css"
const SearchBar = ({ placeholder,data}) => {
 
  return (
    <>
      <div className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}/>
        <button className={styles.searchButton}  >
          <SearchIcon  />
        </button>
      </div>
    </>
  );
};

export default SearchBar;

