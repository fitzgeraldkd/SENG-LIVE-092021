import { useState } from 'react';

import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import {cakes} from "../data/cakesData";

function App() {
  const [search, setSearch] = useState('');
  const [cakeList, setCakeList] = useState(cakes);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCakeList(cakes.filter(cake => cake.flavor.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <div className="App">
      <Header bakery="Flatiron Bakes" slogan="live love code bake repeat" />
      <Search search={search} handleSearch={handleSearch} />
      <CakeContainer cakeList={cakeList} />
    </div>
  );
}

export default App;
