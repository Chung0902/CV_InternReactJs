import React from "react";

const Education = () => {
  return (
    <div className="partRight">
      <div className="com">
        <h2 className="icon" style={{ color: "rgb(1, 97, 142)" }}>
          <i class="fa-solid fa-pen-nib"></i>Education
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>
        UNIVERSITY OF TECHNICAL PEDAGOGY - UNIVERSITY OF DA NANG
        </h5>
        <h6>
          <i className="fa"></i>2020 - Currently
        </h6>
        <p>Field of study: Information technology</p>
        <p>Major: Software Engineering</p>
      </div>
      <hr />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>APTECH DA NANG</h5>
        <h6>
          <i className="fa"></i>2/2023 - 8/2023
        </h6>
        <p>
          Fullstack web programming course (Frontend + Backend) with REACTJS +
          NEXTJS, NODEJS, EXPRESSJS AND MONGODB
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Education;
