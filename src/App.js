import React, { useState } from "react";
import ToDoItem from "../src/components/ToDoItem";
import InputItem from "./components/InputItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputItem onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index} // This line should be corrected
              id={index}
              text={todoItem}
              onChecked={() => deleteItem(index)} // Pass the correct id
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
