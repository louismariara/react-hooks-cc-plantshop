import {useEffect,useState} from "react";

function Search() {
  const [search, setSearch] = useState("");
    const [plants, setPlants] = useState([]); 
      function handleSearch(e) {
        setSearch(e.target.value);
      }
    useEffect(() => {
    const fetchPlants = () => {
      fetch("http://localhost:6001/plants")
        .then((response) => response.json())
        .then((data) => {
          setPlants(data);
        })
        
    };
    
        setTimeout(fetchPlants, 1000);
      }, [plants]);
    
      useEffect(() => {
        console.log(search);
      }, [search]);
    
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        value={search}
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
    
  );
}

export default Search;
