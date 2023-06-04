import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const handleAdd = (e) => {
    if (!input) return;
    const fakeId=Date.now()
    const newTodo = {id:fakeId,input};
    const updatedTodo = [...user,newTodo];
    setUser(updatedTodo);
    console.log(updatedTodo);
    console.log("Todo added successfully");
    setInput("");
  };
  const handleRemove =(id)=>{
    const updatedTodo= user.filter((person) => person.id !==id);
    setUser(updatedTodo)
  }
  return (
    // <></>
    <div className="container">
      <h1>Todo List</h1>
      <img
        src="https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=612x612&w=0&k=20&c=p85bCVQZwvkrqqqNOJGg2QuPDu6ynTlQHkASQOTELh8="
        alt=""
      />
      <div className="input-container">
        <input
          type="text"
          id="input"
          placeholder="Add your task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h2>Your Todo's</h2>
      {user.map((person) => {
        return (
          <>
            <div key={person.id} className="display">
              <ul>
                <li>
                  {person.input}
                  <button id="addBtn" onClick={() => handleRemove(person.id)}>
                    Remove
                  </button>
                </li>
              </ul>
            </div>
            {/* <button onClick={()=> setUser([])}>Clear all</button> */}
          </>
        );
      })}
    </div>
  );
};

export default App;
