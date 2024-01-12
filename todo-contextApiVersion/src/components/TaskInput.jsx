import { ListStorage } from "../store/ListItemsStore";
import { useContext, useRef } from "react";


const TaskInput = () => {
  let taskTxt = useRef();
  let taskDt = useRef();
  const {addItem} = useContext(ListStorage);


    return <div className="container-fluid mt-2">
    <div className="row p-2 justify-content-center">
      <div className="col-lg-5 col-md-7 col-sm-9 col-11">

        {/* Heres the Input Form */}
        <form onSubmit={addItem} className="row justify-content-center">
          <div className="col">
            <input ref={taskTxt} type="text" className='form-control border border-2' placeholder='Task'/>
          </div>
          <div className="col">
            <input ref={taskDt} type="date" className='form-control border border-2'/>
          </div>
          <div className="col">
            <button type="submit" className='btn btn-success' >Add</button>
          </div>
        </form>

      </div>
    </div>
  </div>
}

export default TaskInput;