const FoodInput = ({foodInputEnter}) => {

    return <div className="row mt-3 p-2 bg-secondary bg-opacity-25 rounded rounded-4 align-items-center justify-content-center">
    <div className="col">
      <input type="text" onKeyDown={foodInputEnter} placeholder="Enter a Healthy Food" className="form-control" />
    </div>
  </div>
}

export default FoodInput;