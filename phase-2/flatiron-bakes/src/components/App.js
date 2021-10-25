import { useState, useEffect } from 'react';

import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from './CakeDetail';
import Form from './Form';
import Flavors from './Flavors';

function App() {
  const [cakes, setCakes] = useState([]);
  const [flavorsData, setFlavorsData] = useState([]);
  const [search, setSearch] = useState('');
  const [cakeList, setCakeList] = useState(cakes);
  const [selectedCake, setSelectedCake] = useState(null);
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    flavor: '',
    size: '',
    image: '',
    price: ''
  });

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
      .then(resp => resp.json())
      .then(data => {
        setCakes(data);
        setCakeList(data);
      });

    fetch('http://localhost:4000/flavorsData')
      .then(resp => resp.json())
      .then(data => {
        setFlavorsData(data);
      });
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleAddCake = (cake) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...cake, liked: false})
    };
    fetch('http://localhost:4000/cakes', options)
      .then(resp => resp.json())
      .then(newCake => {
        setCakeList([newCake, ...cakeList]);
        setFormData({
          flavor: '',
          size: '',
          image: '',
          price: ''
        });
      });
    // setCakeList([cake, ...cakeList]);
  };

  const handleDelete = (deletedCake) => {
    console.log(deletedCake);
    fetch(`http://localhost:4000/cakes/${deletedCake.id}`, {method: 'DELETE'})
      .then(() => {
        const filteredCakes = cakes.filter(cake => cake.id !== deletedCake.id);
        setCakes(filteredCakes);
        setCakeList(filteredCakes);
        setSelectedCake(null);
      })
  }

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
      { selectedCake ? <CakeDetail selectedCake={selectedCake} handleDelete={handleDelete} /> : null }
      <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Form' : 'Show Form'}</button>
      {visible ? <Form formData={formData} handleAddCake={handleAddCake} handleChange={handleChange} /> : null}
      <Search search={search} handleSearch={handleSearch} />
      <Flavors handleFilter={handleFilter} flavorsData={flavorsData} />
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
