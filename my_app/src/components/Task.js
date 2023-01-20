import React from "react";

function Task(props) {
  const { id, title, body } = props;
  return (
    <div className="task">
      <h3>
        <u>
          {id}: {title}
        </u>
      </h3>
      <p>{body}</p>
    </div>
  );
}

export default Task;
