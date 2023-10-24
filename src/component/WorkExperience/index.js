import React from "react";

const WorkExperience = () => {
  return (
    <div className="partRight">
      {/*write experience*/}
      <div className="com">
        <h2 className="icon" style={{ color: "rgb(1, 97, 142)" }}>
          <i class="fa-solid fa-folder-open"></i>Dự án tham gia
        </h2>
      </div>
      <br />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>
          Trường đại học Sư phạm Kỹ thuật
        </h5>
        <p>Đây là đồ án phần mềm tại trường : </p>
        <p>
          - Sử dụng ngôn ngữ : ReacJS, NodeJS, MySQL <br />
          - Vai trò : Thiết kế giao <br />
          diện của website, đảm nhiệm chức năng đăng ký, đăng nhập, duyệt, đặt sân trong dự án và thiết kế
          cơ sở dữ liệu. <br />- Kết quả: Đã hoàn thành một website thương mại
          điện tử với đầy đủ chức năng cơ bản của một trang web với đề tài Quản
          lý đặt sân bóng tại quận Hải Châu.
        </p>
      </div>
      <hr />
      <div className="com">
        <h5 style={{ color: "rgb(1, 97, 142)" }}>Aptech Đà Nẵng</h5>
        <p>
          Đây là dự án xây dựng website thương mại điện tử kết thúc khóa học tại
          trung tâm
        </p>
        <p>
          - Sử dụng ngôn ngữ: ReacJS, NextJS, NodeJS, MongoDB <br />
          - Vai trò: Thiết kế cơ sở dữ liệu, thiết kế giao diện của website, đảm
          nhiệm các chức năng trong trang web như thêm, sửa, xóa, thống kê, tìm
          kiếm, lọc, ... <br />- Kết quả: Hoàn thành một trang web thương mại
          điện tử hoàn chỉnh với đầy đủ các chức năng.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default WorkExperience;
