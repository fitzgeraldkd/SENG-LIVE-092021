import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import {cakes} from "../data/cakesData";

function App() {
  return (
    <div className="App">
      <Header bakery="Flatiron Bakes" slogan="live love code bake repeat" />
      <Search />
      <CakeContainer cakeList={cakes} />
    </div>
  );
}

export default App;
