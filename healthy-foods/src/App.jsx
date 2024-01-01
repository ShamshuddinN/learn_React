import "bootstrap/dist/css/bootstrap.css";
import Parent from "./components/parentEle";
import "./healthy.css";
function App() {
  let healthyFoods = ["Fruits", "Apple", "Vegetables", "Milk"];
  // let healthyFoods = [];
  

  return (
    <>
      <h2 className=" text-center p-2 items-font ">Healthy Food Items</h2>
      {healthyFoods.length !== 0 ? <Parent  farray = {healthyFoods} ></Parent> : <h5> Array is empty </h5>}

      
    </>
  );
}

export default App;
