import React from "react";

const Activities = () => {
  return (
    <div className="partRight">
      {/*write experience*/}
      <div className="com">
        <h2 className="icon" style={{color:  "rgb(1, 97, 142)"}}>
        <i class="fa-solid fa-users"></i>Social activities
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>Participate in school activities</h5>
        <h6>
          <i className="fa"></i>2020 - Currently
        </h6>
        <ul>
          <li>Volunteers</li>
          <li>Participate in humanitarian blood donation activities.</li>
          <li>Participate in student fairs.</li>
          <li>Join activity groups at school.</li>
        </ul>
      </div>
      <hr />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>
        Participate in green summer activities at Duy Phuoc, Duy Xuyen district, Quang Nam province
        </h5>
        <h6>
          <i className="fa"></i>Currently
        </h6>
        <ul>
          <li>Participate in green summer volunteer activities.</li>
          <li>Participate in youth camp activities in Duy Phuoc commune.</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Activities;
