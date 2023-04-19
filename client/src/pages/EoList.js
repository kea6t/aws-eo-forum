import React from "react";

const EoList = () => {
  return (
    <div>
      <div>Here is where the upload happens! For admin users only</div>
      <div className="file">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default EoList;
