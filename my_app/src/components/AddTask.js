import React, { useState, useEffect } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reminder, setReminder] = useState(false);
  const { addTask } = props;

  const submitThis = (e) => {
    e.preventDefault();

    if (title.length === 0) {
      alert("Please Add Title");
      return;
    }
    if (body.length === 0) {
      alert("Please Add body");
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      body: body,
      reminder: reminder,
    };
    addTask(data);

    setTitle("");
    setBody("");
    setReminder(false);
  };


  return (
    <form className="add-form" onSubmit={submitThis}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="type the title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label>Body</label>
        <input
          type="text"
          placeholder="type the body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label>Body</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
          // e.currentTarget.checked means it sets to True or False
        ></input>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
}

export default AddTask;
