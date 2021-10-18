import { useState } from 'react';

import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from './CakeDetail';
import Form from './Form';
import Flavors from './Flavors';
import {cakes, flavorsData} from "../data/cakesData";

function App() {
  const [search, setSearch] = useState('');
  const [cakeList, setCakeList] = useState(cakes);
  const [selectedCake, setSelectedCake] = useState(null);

  const [formData, setFormData] = useState({
    flavor: '',
    size: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleAddCake = (cake) => {
    setCakeList([cake, ...cakeList]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCakeList(cakes.filter(cake => cake.flavor.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const handleCakeClick = (cakeObj) => {
    setSelectedCake(cakeObj);
  };

  const handleEdit = (cakeObj) => {
    setFormData({...cakeObj});
  }

  const handleFilter = (flavor) => {
    setCakeList(cakes.filter(cake => cake.flavor === flavor))
  }

  return (
    <div className="App">
      <Header bakery="Flatiron Bakes" slogan="live love code bake repeat" />
      { selectedCake ? <CakeDetail selectedCake={selectedCake} /> : null }
      <Form formData={formData} handleAddCake={handleAddCake} handleChange={handleChange} />
      <Search search={search} handleSearch={handleSearch} />
      <Flavors handleFilter={handleFilter} flavorsData={flavorsData} />
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
