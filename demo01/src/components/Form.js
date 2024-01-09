import { useState, useRef, useEffect } from "react";
import React from "react";

export default function Form() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxLength = 50; // Độ dài tối đa cho textarea

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
    setCharCount(inputValue.length);
  };

  useEffect(() => {
    // Cập nhật độ dài ký tự mỗi khi text thay đổi
    setCharCount(text.length);
  }, [text]);

  const textareaRef = useRef(null);

  const handleCopyClick = () => {
    // Kiểm tra xem có nội dung trong textarea không
    if (text) {
      // Lấy tham chiếu của textarea
      const textarea = textareaRef.current;

      // Chọn toàn bộ nội dung trong textarea
      textarea.select();
      textarea.setSelectionRange(0, 99999); // Đối với các trình duyệt hỗ trợ

      // Sao chép nội dung vào clipboard
      document.execCommand("copy");

      // Bỏ chọn nội dung trong textarea
      textarea.setSelectionRange(0, 0);
    }
  };
  return (
    <>
      <div className="container mt-5 w-96 bg-black h-96 d-flex flex-column border p-4">
        <div className="row">
          <div className="col">
            {/* Nút Tab Layout */}
            <ul className="nav nav-tabs d-flex border-0">
              <li className="nav-item flex-grow-1 me-2">
                <button
                  className={`nav-link ${
                    activeTab === "tab1"
                      ? "bg-success text-white"
                      : "text-secondary border border"
                  } w-100 rounded-5 rounded-bottom`}
                  id="tab1"
                  data-bs-toggle="tab"
                  href="#content1"
                  onClick={() => handleTabClick("tab1")}
                >
                  Writing Topic
                </button>
              </li>
              <li className="nav-item flex-grow-1 ms-2">
                <button
                  className={`nav-link ${
                    activeTab === "tab2"
                      ? "bg-success text-white"
                      : "text-secondary border border"
                  } w-100 rounded-5 rounded-bottom`}
                  id="tab2"
                  data-bs-toggle="tab"
                  href="#content2"
                  onClick={() => handleTabClick("tab2")}
                >
                  From Your Essay
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* Title */}
            <h3>From Your Essay</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* Nội dung của các Tab */}
            <div className="tab-content">
              <div
                className="tab-pane fade show active border border-2 mb-2"
                id="content1"
              >
                <textarea
                  className="form-control border-0"
                  rows="5"
                  maxLength={maxLength}
                  placeholder="Type or paste your topic here"
                  value={text}
                  ref={textareaRef}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="row">
                  <div className="col-auto">
                    <img
                      onClick={handleCopyClick}
                      src="assets/copy.png"
                      alt=""
                      style={{ maxWidth: "20px", height: "auto" }}
                    />
                  </div>
                  <div className="col text-muted text-end">
                    {charCount}/{maxLength}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active border border-2 mb-2"
                id="content2"
              >
                <textarea
                  className="form-control border-0"
                  rows="5"
                  maxLength={maxLength}
                  placeholder="Type or paste your topic here"
                  value={text}
                  ref={textareaRef}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="row">
                  <div className="col-auto">
                    <img
                      onClick={handleCopyClick}
                      src="assets/copy.png"
                      alt=""
                      style={{ maxWidth: "20px", height: "auto" }}
                    />
                  </div>
                  <div className="col text-muted text-end">
                    {charCount}/{maxLength}
                  </div>
                </div>
              </div>
              <div className="container border border-2 rounded-3">
                <div className="row justify-content-center">
                  <img
                    src="/assets/cup.png"
                    alt=""
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                  <h5 className="col align-self-center pt-2">
                    Excess to 20 or more tools to convert PDF to Word....
                  </h5>
                </div>
                <p className="fw-semibold ps-4">
                  Before you know what kindness really isyou must lose
                  things,feel the future dissolve in a momentlike salt in a
                  weakened broth.What you held in your hand,what you counted and
                  carefully saved...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* Button Submit */}
            <button
              type="button"
              className="btn btn-success container rounded-4"
            >
              Generate Quizz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
