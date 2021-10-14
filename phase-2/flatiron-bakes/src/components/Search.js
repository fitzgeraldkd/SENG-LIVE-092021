function Search({ search, handleSearch }) {
    return (
        <input type="text" value={search} onChange={handleSearch} ></input>
    );
}

export default Search;