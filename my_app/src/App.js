import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const data = require("./data.json");

function App() {
  const [buttonColor, setColor] = useState("Green");
  const [tasks, setTask] = useState([]);

  // const addTask = async (data) => {

  // }

  // const deleteTask = async (data) =>{

  // }

  const onClick = async (data) => {
    setColor(data);
  };

  useEffect(() => {
    setTask(data.data);
  }, []);

  
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onClick={onClick}
        btnColor={buttonColor}
      ></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
