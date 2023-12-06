import React from "react";

const WorkExperience = () => {
  return (
    <div className="partRight">
      {/*write experience*/}
      <div className="com">
        <h2 className="icon" style={{ color: "rgb(1, 97, 142)" }}>
          <i class="fa-solid fa-folder-open"></i>Project participation
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>
          University of Technical Education
        </h5>
        <p>This is the software project at school:</p>
        <p>
          - Using languages: ReactJS, NodeJS, MySQL
          <br />
          - Role: Interface design <br />
          website interface, responsible for registration, login, approval,
          project placement and design functions database.
          <br />- Result: Completed a commercial website electronic with full
          basic functions of a website with Admin theme located the soccer field
          in Hai Chau district.
        </p>
      </div>
      <hr />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>Aptech Da Nang</h5>
        <p>
          This is the project to build an e-commerce website at the end of the
          course center
        </p>
        <p>
          - Using languages: ReactJS, NextJS, NodeJS, MongoDB <br />
          - Role: Database design, website interface design, assurance
          Responsible for website functions such as adding, editing, deleting,
          statistics, and searching search, filter, ... <br />- Result: Complete
          a commercial website Complete electronics with full functionality.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default WorkExperience;
