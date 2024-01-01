import "bootstrap/dist/css/bootstrap.css";
import FluidCo from "./components/fluidContainer";
import HealthyCo from "./components/healthyContainer";
import HLCol from "./components/HlCol";
import HLul from "./components/HlUL";
import HealthyHead from "./components/healthyHead";
import FoodInput from "./components/foodInput";
import { useState } from "react";

function App() {
  // let healthyFoods = ["Fruits", "Coconut", "Vegetables",];

  let [healthyFoods, setFoodArray] = useState(["Fruits", "Coconut", "Vegetables",])

  const foodInputHandle = (event) => {
    
    if (event.key === "Enter") {
      let newFoodsArr = [...healthyFoods, event.target.value];
      setFoodArray(newFoodsArr);
      event.target.value = '';
    }

  }

  return (
    <>
      <FluidCo>
        <HealthyCo>
          <HealthyHead></HealthyHead>
          <FoodInput foodInputEnter= {foodInputHandle}></FoodInput>

          {
          healthyFoods.length === 0 ? <p className="p-2 mt-2 text-center">I am Hungry!</p>  : 
          <div className="row  border shadow rounded rounded-3 p-4  mt-3 ">
            <HLCol>
              <HLul Hfs={healthyFoods}></HLul>
            </HLCol>
          </div>
          }

        </HealthyCo>
      </FluidCo>
    </>
  );
}

export default App;
