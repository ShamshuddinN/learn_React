const CalDisplay = ({calcOut}) => {
  
  let outPuteval = '';
  let endIndx = calcOut.length - 1;
  if (calcOut[endIndx] === '=') {
    outPuteval = eval(calcOut.slice(0, endIndx));
    
  }
    return <div className="row ms-1 me-1 mt-2 ">
    <input type="text" id='calInAndOut' value={outPuteval ? outPuteval : calcOut} readOnly placeholder='Output' className='form-control text-end' />
  </div>
}

export default CalDisplay;