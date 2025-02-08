import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    address: "123 Tech Lane, Silicon Valley, CA",
    summary: "Experienced software developer with 5+ years of expertise in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and mentoring junior developers.",
    linkedin: "linkedin.com/in/johndoe",
    website: "johndoe.dev"
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      school: "Stanford University",
      title: "Master of Science in Computer Science",
      date: "2018 - 2020",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      achievements: "Machine Learning Research Assistant, Dean's List"
    },
    {
      id: 2,
      school: "University of California, Berkeley",
      title: "Bachelor of Science in Computer Science",
      date: "2014 - 2018",
      location: "Berkeley, CA",
      gpa: "3.8/4.0",
      achievements: "Computer Science Honor Society, Undergraduate Research Award"
    }
  ]);

  const [practical, setPractical] = useState([
    {
      id: 1,
      company: "Google",
      position: "Senior Software Engineer",
      responsibilities: "Led a team of 5 developers in building and maintaining cloud-based applications",
      dateFrom: "2020",
      dateUntil: "Present",
      location: "Mountain View, CA",
      technologies: "React, Node.js, Google Cloud Platform, Kubernetes",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers who were promoted to mid-level"
      ]
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Software Engineer",
      responsibilities: "Developed and maintained enterprise-level web applications",
      dateFrom: "2018",
      dateUntil: "2020",
      location: "Redmond, WA",
      technologies: "React, TypeScript, Azure, Docker",
      achievements: [
        "Developed key features used by 1M+ users",
        "Improved test coverage from 65% to 90%",
        "Received Excellence Award for outstanding performance"
      ]
    }
  ]);

  const addEducation = () => {
    setEducation([...education, {
      id: Date.now(),
      school: "",
      title: "",
      date: "",
      location: "",
      gpa: "",
      achievements: ""
    }]);
  };

  const addExperience = () => {
    setPractical([...practical, {
      id: Date.now(),
      company: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateUntil: "",
      location: "",
      technologies: "",
      achievements: []
    }]);
  };

  const removeEducation = (id) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    }
  };

  const removeExperience = (id) => {
    if (practical.length > 1) {
      setPractical(practical.filter(exp => exp.id !== id));
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="App">
      <div className="form-section">
        <div className="form-container">
          <h1>CV Builder</h1>
          <GeneralInfo info={personalInfo} updateInfo={setPersonalInfo} />
          
          <div className="section-container">
            <div className="section-header">
              <h2>Education</h2>
              <button type="button" className="add-btn" onClick={addEducation}>
                Add Education
              </button>
            </div>
            {education.map((edu) => (
              <EducationalExperience
                key={edu.id}
                info={edu}
                updateInfo={(newData) => {
                  setEducation(education.map(e => 
                    e.id === edu.id ? { ...e, ...newData } : e
                  ));
                }}
                onRemove={() => removeEducation(edu.id)}
              />
            ))}
          </div>

          <div className="section-container">
            <div className="section-header">
              <h2>Experience</h2>
              <button type="button" className="add-btn" onClick={addExperience}>
                Add Experience
              </button>
            </div>
            {practical.map((exp) => (
              <PracticalExperience
                key={exp.id}
                info={exp}
                updateInfo={(newData) => {
                  setPractical(practical.map(e => 
                    e.id === exp.id ? { ...e, ...newData } : e
                  ));
                }}
                onRemove={() => removeExperience(exp.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="preview-section">
        <div className="cv-content">
          <div className="cv-header">
            <h1>{personalInfo.name}</h1>
            <div className="contact-info">
              <p>{personalInfo.email} • {personalInfo.phone}</p>
              <p>{personalInfo.address}</p>
              {personalInfo.linkedin && <p>LinkedIn: {personalInfo.linkedin}</p>}
              {personalInfo.website && <p>Website: {personalInfo.website}</p>}
            </div>
          </div>

          {personalInfo.summary && (
            <div className="cv-section">
              <h2>Professional Summary</h2>
              <p>{personalInfo.summary}</p>
            </div>
          )}

          <div className="cv-section">
            <h2>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="entry">
                <div className="entry-header">
                  <h3 className="entry-title">{edu.school}</h3>
                  <p className="entry-subtitle">{edu.title}</p>
                  <p className="entry-date">{edu.date}</p>
                </div>
                {edu.location && <p className="entry-location">{edu.location}</p>}
                {edu.gpa && <p className="entry-gpa">GPA: {edu.gpa}</p>}
                {edu.achievements && <p className="entry-achievements">{edu.achievements}</p>}
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h2>Professional Experience</h2>
            {practical.map((exp) => (
              <div key={exp.id} className="entry">
                <div className="entry-header">
                  <h3 className="entry-title">{exp.company}</h3>
                  <p className="entry-subtitle">{exp.position}</p>
                  <p className="entry-date">{exp.dateFrom} - {exp.dateUntil}</p>
                </div>
                {exp.location && <p className="entry-location">{exp.location}</p>}
                <p>{exp.responsibilities}</p>
                {exp.technologies && (
                  <p className="entry-technologies">
                    <strong>Technologies:</strong> {exp.technologies}
                  </p>
                )}
                {exp.achievements.length > 0 && (
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          Download CV
        </button>
      </div>
    </div>
  );
}

export default App;