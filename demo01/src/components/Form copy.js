import React from "react";

export default function Form() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col">
            {/* Nút Tab Layout */}
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="tab1"
                  data-bs-toggle="tab"
                  href="#content1"
                >
                  Writing Topic
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="tab2"
                  data-bs-toggle="tab"
                  href="#content2"
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
            <h3 className="mt-3">From Your Essay</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* Nội dung của các Tab */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="content1">
                <textarea
                  className="form-control"
                  rows="7"
                  maxLength="50"
                  placeholder="Type or paste your topic here"
                ></textarea>
              </div>
              <div className="tab-pane fade" id="content2">
                <p>Content of Tab 2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {/* Button Submit */}
            <button type="button" className="btn">
              Generate Quizz
            </button>
          </div>
        </div>
        <div className="quest">
          <div className="col" >
            <img src='/images/cup.png' alt="" style={{ maxWidth: '100px', height: 'auto' }}/>
            <h5>Excess to 20 or more tools to convert PDF to Word....</h5>
          </div>
          <p>
            Before you know what kindness really isyou must lose things, feel
            the future dissolve in a momentlike salt in a weakened broth.What
            you held in your hand,what you counted and carefully saved...
          </p>
        </div>
      </div>
    </>
  );
}
