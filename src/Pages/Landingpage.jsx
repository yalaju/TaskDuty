import React from 'react'
import Image from '../Images/lp-img.png'
import {Link} from 'react-router-dom'

const Landingpage = () => {
  return (
    <div>
      <div className="container container-fiuid d-md-flex ">
        <div className="pb-5 pt-5 text-md-start flex-md-grow-3 pe-5">
          <h1>
            {" "}
            your Tasks on <span className="tc-purple">TaskDuty</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            adipisci nobis tenetur voluptatem ipsa quisquam et voluptas vel
            cumque quasi reprehenderit alias impedit veniam necessitatibus quia,
            optio eligendi quidem aliquam?
          </p>
          <Link to="/all-tasks" className="btn btn-lg bg-purple tc-white">
            Go to My Tasks
          </Link>
        </div>
        <img src={Image} className="w-75 flex-md-grow-1" alt="" />
      </div>
    </div>
  );
}

export default Landingpage