import 'bootstrap/dist/css/bootstrap.css'
import ListHead from './components/ListHead'
import TaskInput from './components/TaskInput'
import ListItems from './components/ListItems'
import { ListStorage } from './store/ListItemsStore'
import { useContext, useState } from 'react'


function App() {

  let {addItem, todoItems} = useContext(ListStorage)


  let [items, setItems] = useState([{taskName: 'Learn Programming', taskDate: 'Today'}]);


  return (
    <>
    <ListStorage.Provider value={{todoItems: items, addItem: addItem}}>
      <ListHead></ListHead>
      <TaskInput></TaskInput>
      <ListItems></ListItems>
    </ListStorage.Provider>
    
    </>
  )
}

export default App
