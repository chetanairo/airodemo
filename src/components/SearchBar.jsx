import "../css/SearchBar.css";
const SearchBar = ({keyword, onChange, fetchData}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!keyword.length) return null;    
    fetchData(keyword)
  };
  return (
    <div className="searchbar">
        <form onSubmit ={handleSubmit}>
            <input                 
                key="search-bar"
                value={keyword}
                placeholder={"Search sources"}
                onChange={(e) => onChange(e.target.value)}
            />
            <button
               
            >
                Search
            </button>
        </form>
    </div>        
  );
}

export default SearchBar;