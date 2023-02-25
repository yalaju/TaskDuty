import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import editicon from "../Images/clarity_note-edit-line.png";
import deleteicon from "../Images/fluent_delete-24-regular.png";

export const AllTasks = ({ handleDeleteTask }) => {
  const [data, setData] = useState({
    allTasks: [],
  });

  useState(() => {
    let fetchData = async (url) => {
      let response = await fetch(url);
      let rData = await response.json();
      // console.log(rData);
      setData({ ...data, allTasks: rData });
    };

    fetchData("http://127.0.0.1:8000/api/tasks/");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="all-tasks d-flex flex-column gag-2 pt-5">
      <div className="d-flex justify-content-between pb-3 above-task ">
        <h1>My Tasks</h1>
        <Link className="text-decoration-none fw-bold" to="/create-task">
          + Add New Task
        </Link>
      </div>
      {data.allTasks.map((task) => {
        const { id, task_title, description, tags } = task;
        return (
          <div className="each-task pb-2 " key={id}>
            <div className="d-flex justify-content-between align-items-baseline pb-2 pt-2">
              <div className="each-task p-2" key={id}>
                {tags === 1 ? (
                  <small style={{ color: "#F38383" }}>urgent</small>
                ) : (
                  <small style={{ color: "#F73C3A6" }}>important</small>
                )}
              </div>
              <div className="d-flex">
                <Link
                  to={`/edit-task/${id}`}
                  className="d-flex btn bg-purple tc-white me-2 fw-bold"
                >
                  {" "}
                  <img src={editicon} alt="" /> Edit
                </Link>
                <button
                  style={{ border: "1px solid  #974fd0" }}
                  className="d-flex btn tc-purple fw-bold"
                  onClick={() => {
                    handleDeleteTask(id);
                  }}
                >
                  <img src={deleteicon} alt="" />
                  Delete
                </button>
              </div>
            </div>
            <hr />
            <div className="text-start">
              <h1>{task_title}</h1>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;
