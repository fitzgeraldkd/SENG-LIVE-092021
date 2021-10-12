import CakeCard from "./CakeCard";

function App() {
  return (
    <>
      <h1>Flatiron Bakes</h1>
      <CakeCard flavor={"Carrot and walnut cake"} price={20} />
      <CakeCard flavor={"Chocolate"} price={25} />
      <CakeCard flavor={"Vanilla"} price={28} />
    </>
  );
}

export default App;
