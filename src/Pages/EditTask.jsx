import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const EditTask = ({ handleEditTask }) => {
  const [updatedTask, setUpdatedTask] = useState({
    task_title: "",
    description: "",
    tags_type: 1,
  });

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`);
      let receivedData = await response.json();
      console.log(receivedData);
      setUpdatedTask(receivedData);
    };

    getData();
  }, [id]);

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let sentTask = {
              task_title: updatedTask.task_title,
              description: updatedTask.description,
              tags_type: updatedTask.tags_type,
            };
            handleEditTask(id, updatedTask);
            console.log(sentTask);
          }}
          action=""
          className="form-group"
        >
          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => {
                setUpdatedTask({ ...updatedTask, task_title: e.target.value });
              }}
              className="form-control"
              type="text"
              id="title"
              value={updatedTask.task_title || ""}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={(e) => {
                setUpdatedTask({ ...updatedTask, description: e.target.value });
              }}
              className="form-control"
              name=""
              id="Description"
              cols="30"
              rows="10"
              value={updatedTask.description || ""}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="tags">Tags</label>
            <select
              onChange={(e) => {
                setUpdatedTask({
                  ...updatedTask,
                  tags: Number(e.target.value),
                });
                //   console.log(newTask);
              }}
              name=""
              id="Tags"
              className="form-select"
            >
              <option value="1">urgent</option>
              <option value="2">important</option>
            </select>
          </div>
          <button className="btn bg-purple tc-white w-100">Done</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
