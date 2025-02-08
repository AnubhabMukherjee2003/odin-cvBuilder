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
        <span>{title}</span>
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

function PracticalExperience({ info, updateInfo, onRemove }) {
  const [formData, setFormData] = useState(info);
  const [collapsed, setCollapsed] = useState(false);

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
    updateInfo(newData);
  };

  const handleAchievementsChange = (e) => {
    const achievements = e.target.value.split('\n').filter(item => item.trim() !== '');
    const newData = { ...formData, achievements };
    setFormData(newData);
    updateInfo(newData);
  };

  return (
    <div className="section-container">
      <div className="collapsible-header" onClick={() => setCollapsed(!collapsed)}>
        <span>Work Experience</span>
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
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="e.g. Google"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="e.g. Senior Software Engineer"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g. San Francisco, CA"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateFrom">Start Date:</label>
            <input
              type="text"
              id="dateFrom"
              name="dateFrom"
              placeholder="e.g. Jan 2020"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateUntil">End Date:</label>
            <input
              type="text"
              id="dateUntil"
              name="dateUntil"
              placeholder="e.g. Present"
              value={formData.dateUntil}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsibilities">Responsibilities:</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              placeholder="Describe your main responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="technologies">Technologies:</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              placeholder="e.g. React, Node.js, AWS"
              value={formData.technologies}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="achievements">Key Achievements:</label>
            <textarea
              id="achievements"
              name="achievements"
              placeholder="Enter achievements (one per line)"
              value={formData.achievements.join('\n')}
              onChange={handleAchievementsChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PracticalExperience;