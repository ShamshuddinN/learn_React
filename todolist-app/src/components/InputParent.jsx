import { useRef, useState } from "react";
import ListItems from "./ListItems";
import { MdOutlineAddBox } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const InputParent = () => {

    let [Tasks, settasks] = useState([]);

    // For Child Key
    let CK = useRef(0);

    // For input task text and task date:
    let inputVal = useRef('');
    let dateVal = useRef('');

    let chldKey = CK.current

    const HandleTaskAdd = (event) => {
      // preventing auto page refresh from form submit (onSubmit)
      event.preventDefault();
        
        let tn = inputVal.current.value;
        let td = dateVal.current.value;

        settasks((currentTasks) => [...currentTasks, {taskName: tn, taskDate: td, childKey: chldKey}])

        CK.current += 1;

        // Setting both task input and date to blank.
        inputVal.current.value = '';
        dateVal.current.value = '';
    }

    // Deleting Task
    const deleteTask = (childKey) => {
        const filteredTasks = Tasks.filter(task => task.childKey !== childKey);
        if (filteredTasks.length !== 0) {
            settasks(filteredTasks);
        } else {
            settasks([]);
        }
    }

    return <>
    <div className="container-fluid">
    <div className="row mt-3 p-2 justify-content-center">
      <form onSubmit={HandleTaskAdd} className="col-lg-5 col-md-6 col-sm-8 col-10">
        <div className="row p-2">
          <div className="col">
            <input type="text" ref={inputVal} placeholder="Task" className="form-control border border-2"/>
          </div>
          <div className="col">
            <input type="date" ref={dateVal} className="form-control border border-2"/>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-light border border-secondary">Add <IoMdAddCircle/></button>
          </div>
        </div>
      </form>
    </div>
  </div>

  {/* List items here */}
  <ListItems deleteTask = {deleteTask} takssList = {Tasks}></ListItems>
  
  </>


}

export default InputParent;