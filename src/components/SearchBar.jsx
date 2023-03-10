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
                placeholder={"Start you search here....."}
                onChange={(e) => onChange(e.target.value)}
                type='search'
            />
            <button>Search</button>
        </form>
    </div>        
  );
}

export default SearchBar;