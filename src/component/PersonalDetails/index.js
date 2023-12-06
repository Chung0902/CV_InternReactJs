import React from "react";
import avatar from "../../images/avatar1.jpg";

const PersonalDetails = () => {
  return (
    <>
      <div className="Top">
        {/* <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" /> */}
        <img src={avatar} alt="Avatar" />
        <h2
          className="jane"
          style={{
            color: "white",
            paddingLeft: "20px",
            marginBottom: "20px",
            marginTop: "-80px",
          }}
        >
          Nguyễn Thị Chung
        </h2>
        <h5 style={{ color: "white", marginTop: "-10px", marginLeft: "120px" }}>
          Intern ReactJS
        </h5>
      </div>
      {/*Enter data*/}
      <div className="partTwo">
        <p>
          <i class="fa fa-female"></i> Female
        </p>
        <p>
          <i className="fa fa-birthday-cake"></i>13/09/2002
        </p>
        <p>
          <i className="fa"> </i>0777048652
        </p>
        <p>
          <i className="fa"></i>chungnguyen.130902@gmail.com
        </p>
        <p>
          <i className="fa"></i>K19/20 Đinh Tiên Hoàng, Thanh Bình, Hải Châu,
          Đà Nẵng
        </p>
      </div>
    </>
  );
};

export default PersonalDetails;
