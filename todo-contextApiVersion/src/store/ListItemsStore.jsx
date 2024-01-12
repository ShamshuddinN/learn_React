import { createContext } from "react";


export const ListStorage = createContext({
    todoItems,
    addItem: () => {},
    // deeteItem : () => {console.log('Delete Item')},
});

const addItem = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);

    setItems((currentItems) => {
      [...currentItems, {taskName: event.target[0].value, taskDate: event.target[1].value}]
    })

  }