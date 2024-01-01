import styles from './ListItems.module.css'

const ListItems = ({takssList, deleteTask}) => {
  
    return <div className="container-fluid">
    <div className="row justify-content-center p-2 mt-2">
      <div className="col-lg-5 col-md-6 col-sm-8 col-10">
      <ul className="list-group">
          {takssList.length > 0 ? takssList.map((items) => (<li key={items.childKey} className="list-group-item">{items.taskName} -- {items.taskDate} <button onClick={() => deleteTask(items.childKey)} className={`btn btn-danger ${styles.alignEnd}`} >Delete</button> </li>)) : <p className='text-center'>The Task List is empty!</p>}
        </ul>
      </div>
    </div>
  </div>
}

export default ListItems;