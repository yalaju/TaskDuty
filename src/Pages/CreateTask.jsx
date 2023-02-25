import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreateTask = ({ handleCreateTask }) => {
  const [newTask, setNewTask] = useState({
    task_title: "",
    description: "",
    tags: 1,
  });

  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateTask(newTask);
          //   console.log(newTask);

          setTimeout(() => {
            navigate("/all-tasks");
          }, 3000);
        }}
        action=""
        className="form-group"
      >
        <div className="d-flex align-items-center gap-2 mb-4">
          <p>{"<"}</p>
          <p>new task</p>
        </div>
        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, task_title: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
            className="form-control"
            name=""
            id="Description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="tags">Tags</label>
          <select
            onChange={(e) => {
              setNewTask({ ...newTask, tags: Number(e.target.value) });
              console.log(newTask);
            }}
            name=""
            id="tags"
            className="form-select"
          >
            <option value="1">urgent</option>
            <option value="2">important</option>
          </select>
        </div>
        <button className="btn bg-purple tc-white w-100">Done</button>
      </form>
    </div>
  );
};

export default CreateTask;
