import React, { useState } from 'react';

function GeneralInfo({ info, updateInfo }) {
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
        <span>Personal Information</span>
        <span>{collapsed ? '▼' : '▲'}</span>
      </div>
      <div className={`form-content ${collapsed ? 'collapsed' : 'expanded'}`}>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input  
              type="text"
              id="name"
              name="name"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input   
              type="email"
              id="email"
              name="email"
              placeholder="e.g. john.doe@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input   
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. 123-456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input   
              type="text"
              id="address"
              name="address"
              placeholder="e.g. 123 Main St"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="summary">Professional Summary:</label>
            <textarea
              id="summary"
              name="summary"
              placeholder="Brief professional summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn:</label>
            <input   
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="LinkedIn profile URL"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Personal Website:</label>
            <input   
              type="url"
              id="website"
              name="website"
              placeholder="Personal website URL"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default GeneralInfo;