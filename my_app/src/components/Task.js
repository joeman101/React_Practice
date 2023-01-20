import React from "react";
import { FaTimes } from "react-icons/fa";

function Task(props) {
  const { id, title, body, deleteTask, toggleReminder, reminder } = props;
  return (
    <div
      className={reminder ? "task reminder" : "task"}
      onDoubleClick={() => toggleReminder(id)}
    >
      <h3>
        <u>
          {id}: {title}
        </u>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(id)}
        ></FaTimes>
      </h3>
      <p>{body}</p>
    </div>
  );
}

export default Task;
