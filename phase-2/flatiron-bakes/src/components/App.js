import { useState } from 'react';

import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from './CakeDetail';
import {cakes} from "../data/cakesData";

function App() {
  const [search, setSearch] = useState('');
  const [cakeList, setCakeList] = useState(cakes);
  const [selectedCake, setSelectedCake] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCakeList(cakes.filter(cake => cake.flavor.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const handleCakeClick = (cakeObj) => {
    setSelectedCake(cakeObj);
  };

  return (
    <div className="App">
      <Header bakery="Flatiron Bakes" slogan="live love code bake repeat" />
      { selectedCake ? <CakeDetail selectedCake={selectedCake} /> : null }
      <Search search={search} handleSearch={handleSearch} />
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick} />
    </div>
  );
}

export default App;
