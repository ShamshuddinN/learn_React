import { useContext } from "react";
import { ListStorage } from "../store/ListItemsStore";

const ListItems = () => {
    
    const {items} = useContext(ListStorage);
    // console.log(fetchStorage[0].taskName);
    console.log(items);
    
    return <div className="container-fluid ">
    <div className="row justify-content-center p-2">
      <div className="col-lg-6 col-md-8 col-sm-10 col-11">

        {/* Make Loop From Here */}

        {items ? items.map((store) => (<div className="row mt-3 justify-content-center">
          <div className="col">
            {store.taskName}
          </div>
          
          <div className="col">
          {store.taskDate}
          </div>
          
          <div className="col">
            <button className='btn btn-danger' >Delete</button>
          </div>
        </div>)) : <p className="mt-3 p-2 fs-4 text-center"> The List is Empty </p>}

        {/* End Loop Here */}


      </div>
    </div>
  </div>
}

export default ListItems;