import React from "react";
import Task from "./Task";

function Tasks(props) {
  const { tasks, deleteTask, toggleReminder } = props;
  return (
    <div>
      {tasks.map((data, idx) => (
        <Task
          key={data.id}
          id={data.id}
          title={data.title}
          body={data.body}
          reminder={data.reminder}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        ></Task>
      ))}
    </div>
  );
}

export default Tasks;
