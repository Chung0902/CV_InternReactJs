import React from "react";

const Education = () => {
  return (
    <div className="partRight">
      <div className="com">
        <h2 className="icon" style={{color:  "rgb(1, 97, 142)"}}>
          <i className="fa"></i>Học vấn
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT - ĐẠI HỌC ĐÀ NẴNG</h5>
        <h6>
          <i className="fa"></i>2020 - Hiện nay
        </h6>
        <p>Ngành học: Công nghệ thông tin</p>
        <p>Chuyên ngành: Kỹ thuật phần mềm</p>
      </div>
      <hr />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>
          APTECH ĐÀ NẴNG
        </h5>
        <h6>
          <i className="fa"></i>2/2023 - 8/2023
        </h6>
        <p>
          Khóa lập trình web fullstack (Frontend + Backend) với REACTJS +
          NEXTJS, NODEJS, EXPRESSJS VÀ MONGODB)
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Education;
