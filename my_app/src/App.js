import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const data = require("./data.json");

function App() {
  const [buttonColor, setColor] = useState("green");
  const [tasks, setTask] = useState([]);

  const addTask = async (data) => {
    setTask([...tasks, data]);
  };

  const deleteTask = async (id) => {
    setTask(
      tasks.filter((data) => {
        return data.id !== id;
      })
    );
  };

  const toggleReminder = async (id) => {
    const new_tasks = [];
    tasks.forEach((data) => {
      if (data.id == id) {
        data.reminder = !data.reminder;
      }
      new_tasks.push(data);
    });
    setTask(new_tasks);
  };

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

      {buttonColor === "green" ? <AddTask addTask={addTask}></AddTask> : null}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        ></Tasks>
      ) : (
        <h3> NO TASKS!!!</h3>
      )}
    </div>
  );
}

export default App;
