import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((prev) => [toDo, ...prev]);
    setToDo("");
  };
  
  return (
    <div>
      <h1>My To Dos {toDos.length} </h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange ={onChange} 
          type="text" 
          value={toDo} 
          placeholder="Write your to do">
        </input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
