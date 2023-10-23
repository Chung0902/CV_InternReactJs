import React from "react";

const Activities = () => {
  return (
    <div className="partRight">
      {/*write experience*/}
      <div className="com">
        <h2 className="icon" style={{color:  "rgb(1, 97, 142)"}}>
        <i class="fa-solid fa-users"></i>Hoạt động xã hội
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>Tham gia các hoạt động của trường</h5>
        <h6>
          <i className="fa"></i>2020 - Hiện nay
        </h6>
        <ul>
          <li>Tình nguyện viên</li>
          <li>Tham gia hoạt động hiến máu nhân đạo.</li>
          <li>Tham gia ngày hội sinh viên.</li>
          <li>Tham gia các nhóm hoạt động tại trường. </li>
        </ul>
      </div>
      <hr />
      <div className="com">
        <h5 style={{color:  "rgb(1, 97, 142)"}}>
          Tham gia hoạt động mùa hè xanh tại Duy Phước, huyện Duy Xuyên, tỉnh
          Quảng Nam
        </h5>
        <h6>
          <i className="fa"></i>Hiện nay
        </h6>
        <ul>
          <li>Tham gia các hoạt động tình nguyện mùa hè xanh.</li>
          <li>Tham gia hoạt động trại thanh niên tại xã Duy Phước.</li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Activities;
