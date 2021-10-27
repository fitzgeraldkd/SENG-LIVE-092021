import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from './CakeDetail';
import Form from './Form';
import Flavors from './Flavors';
import useQuery from '../hooks/useQuery';

function App() {
  const [cakes, setCakes] = useState([]);
  const [search, setSearch] = useState('');
  const [cakeList, setCakeList] = useState(cakes);
  const [selectedCake, setSelectedCake] = useState(null);
  // const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    flavor: '',
    size: '',
    image: '',
    price: ''
  });

  const [flavorsData] = useQuery('http://localhost:4000/flavorsData');

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
      .then(resp => resp.json())
      .then(data => {
        setCakes(data);
        setCakeList(data);
      });
  }, []);

  useEffect(() => {

  }, [cakes]);

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

  const handleEdit = (cakeObj) => {
    setFormData({...cakeObj});
  }

  const handleFilter = (flavor) => {
    setCakeList(cakes.filter(cake => cake.flavor === flavor))
  }

  return (
    <div className="App">
      <Header bakery="Flatiron Bakes" slogan="live love code bake repeat" />
      {/* { selectedCake ? <CakeDetail selectedCake={selectedCake} handleDelete={handleDelete} /> : null } */}
      {/* <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Form' : 'Show Form'}</button> */}
      <Switch>
        <Route path='/cakes/new'>
          <Form formData={formData} handleAddCake={handleAddCake} handleChange={handleChange} />
        </Route>

        <Route path='/cakes/:id'>
          <CakeDetail handleDelete={handleDelete} />
        </Route>

        <Route path='/cakes'>
          <Search search={search} handleSearch={handleSearch} />
          <Flavors handleFilter={handleFilter} flavorsData={flavorsData} />
          <CakeContainer cakeList={cakeList} handleEdit={handleEdit} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
