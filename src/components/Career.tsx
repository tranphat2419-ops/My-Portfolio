import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Học tập <span>&</span>
          <br /> nghiên cứu
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Nghiên cứu AI</h4>
                <h5>Tự học & Dự án cá nhân</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Khởi đầu chặng đường tự nghiên cứu và phát triển các mô hình Học máy, Học sâu, và tìm hiểu về công nghệ AI Agents, Xử lý ngôn ngữ tự nhiên (NLP).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Nghiên cứu Khoa học</h4>
                <h5>Đề tài: Ứng dụng AI trong việc học tập</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Đóng vai trò là người đưa ra ý tưởng và trực tiếp phát triển, lập trình ứng dụng học tập tích hợp AI dành cho học sinh. Nghiên cứu sâu về các phương pháp cá nhân hóa lộ trình học và tối ưu hiệu quả tiếp thu kiến thức.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Thiết kế & Quản lý Website</h4>
                <h5>Trường Trung cấp Kinh tế - Kỹ thuật Q.12</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Học tập niên khóa 2024 - 2026, kết hợp kỹ năng thiết kế, phát triển và quản lý website với niềm đam mê nghiên cứu Trí tuệ Nhân tạo (AI).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
