import 'bootstrap/dist/css/bootstrap.css'
import ButtonContainer from './components/buttonParent';
import CalDisplay from './components/calDisplay';
import { useState } from 'react';

function App() {

  let buttonsObj = [{row: ['All Clear'], key: 'row1'}, 
  {row: ['1', '2', '3', '+', '-'], key: 'row2'}, 
  {row: ['4', '5', '6', '*', '/'], key: 'row3'},
  {row: ['7', '8', '9', '**2', '**0.5'], key: 'row4'},
  {row: ['.', '0', '='], key: 'row5'},
];

    let [calcOut, setcalcOut] = useState('');

  

    const calBtnClick = (event) => {
      
      if (event.target.innerText === 'All Clear') {
        setcalcOut('')
      } else {
        let previous = calcOut + event.target.innerText;
        setcalcOut(previous);
      }
    }

      
  return (
    <>

    <div className="row text-center mb-2 mt-2 p-2 ">
      <h3>Welcome to calculator</h3>
    </div>



    <div className="container-fluid mt-3">
      <div className="row justify-content-center ">
        <div className="col-lg-7 col-md-9 col-sm-10 col-11 p-3 border border-secondary rounded rounded-2 shadow">
          <CalDisplay calcOut = {calcOut}></CalDisplay>
          <ButtonContainer btnsObj={buttonsObj} calBtnClick = {calBtnClick} ></ButtonContainer>

        </div>
      </div>
    </div>
    </>
  )
}

export default App;
