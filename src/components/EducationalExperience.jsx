import React, { useState } from 'react';

function EducationalExperience({ info, updateInfo, onRemove }) {
  const [formData, setFormData] = useState(info);
  const [collapsed, setCollapsed] = useState(false);

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    updateInfo(newData);
  };

  return (
    <div className="section-container">
      <div className="collapsible-header" onClick={() => setCollapsed(!collapsed)}>
        <span>Education</span>
        <div>
          <button type="button" className="remove-btn" onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}>
            Remove
          </button>
          <span style={{ marginLeft: '8px' }}>{collapsed ? '▼' : '▲'}</span>
        </div>
      </div>
      <div className={`form-content ${collapsed ? 'collapsed' : 'expanded'}`}>
        <form>
          <div className="form-group">
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="e.g. Harvard University"
              value={formData.school}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title of Study:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Bachelor of Science"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date of Study:</label>
            <input
              type="text"
              id="date"
              name="date"
              placeholder="e.g. 2015-2019"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. Cambridge, MA"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA:</label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              placeholder="e.g. 3.8/4.0"
              value={formData.gpa}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="achievements">Achievements:</label>
            <textarea
              id="achievements"
              name="achievements"
              placeholder="Notable achievements, honors, etc."
              value={formData.achievements}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EducationalExperience;