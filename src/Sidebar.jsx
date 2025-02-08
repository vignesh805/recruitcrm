import './Sidebar.css';
import { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import AddCandidate from './AddCandidate';
import Work from './Work';
import Education from './Education';
import Empx from './Empx';
import Resume from './Resume';

const Sidebar = ({ isOpen, onClose }) => {
  const [sections, setSections] = useState({
    personalInfo: false,
    workHistory: false,
    educationHistory: false,
    employmentInfo: false,
    resumeSkills: false,
    socialLinks: false,
    additionalInfo: false,
  });

  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);

  // Toggle section visibility
  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const handleInputClick = (event) => {
    event.stopPropagation(); // Prevent modal close when clicking inside content
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // Implement the submission logic here
    onClose(); // Close modal after submission
  };

  return (
    <div className={`side-modal ${isOpen ? 'open' : ''}`}>
      <button className="close-buttons" onClick={onClose}>
        X
      </button>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="form-containers">
            <h2 className="candsid">Add Candidate</h2>

            {/* Personal Information Section */}
            <div className="section" onClick={() => toggleSection('personalInfo')}>
              <div className="section-header">
                <span>👤 Personal Information</span>
                <span>{sections.personalInfo ? '▲' : '▼'}</span>
              </div>
              {sections.personalInfo && (
                <div className="section-content" onClick={handleInputClick}>
                  <AddCandidate />
                </div>
              )}
            </div>

            {/* Work History Section */}
            <div className="section" onClick={() => toggleSection('workHistory')}>
              <div className="section-header">
                <span>📋 Work History</span>
                <span>{sections.workHistory ? '▲' : '▼'}</span>
              </div>
              {sections.workHistory && (
                <div className="section-content" onClick={handleInputClick}>
                  <button type="button" className="work" onClick={() => setShowWorkModal(true)}>
                    Add Work History
                  </button>
                  {showWorkModal && <Work onClose={() => setShowWorkModal(false)} />}
                </div>
              )}
            </div>

            {/* Education History Section */}
            <div className="section" onClick={() => toggleSection('educationHistory')}>
              <div className="section-header">
                <span>🎓 Education History</span>
                <span>{sections.educationHistory ? '▲' : '▼'}</span>
              </div>
              {sections.educationHistory && (
                <div className="section-content" onClick={handleInputClick}>
                  <button type="button" className="education" onClick={() => setShowEducationModal(true)}>
                    Add Education History
                  </button>
                  {showEducationModal && <Education onClose={() => setShowEducationModal(false)} />}
                </div>
              )}
            </div>

            {/* Employment Information Section */}
            <div className="section" onClick={() => toggleSection('employmentInfo')}>
              <div className="section-header">
                <span>🏢 Employment Information</span>
                <span>{sections.employmentInfo ? '▲' : '▼'}</span>
              </div>
              {sections.employmentInfo && (
                <div className="section-content" onClick={handleInputClick}>
                  <Empx />
                </div>
              )}
            </div>

            {/* Resume, Language, and Technical Skills Section */}
            <div className="section" onClick={() => toggleSection('resumeSkills')}>
              <div className="section-header">
                <span>📄 Resume, Language, and Technical Skills</span>
                <span>{sections.resumeSkills ? '▲' : '▼'}</span>
              </div>
              {sections.resumeSkills && (
                <div className="section-content" onClick={handleInputClick}>
                  <Resume />
                </div>
              )}
            </div>

            {/* Social Profile Links Section */}
            <div className="section" onClick={() => toggleSection('socialLinks')}>
              <div className="section-header">
                <span>🔗 Social Profile Links</span>
                <span>{sections.socialLinks ? '▲' : '▼'}</span>
              </div>
              {sections.socialLinks && (
                <div className="section-content" onClick={handleInputClick}>
                  <div className="soclink">
                    <input type="url" placeholder="LinkedIn" />
                    <input type="url" placeholder="GitHub" />
                  </div>
                </div>
              )}
            </div>

            {/* Additional Information Section */}
            <div className="section" onClick={() => toggleSection('additionalInfo')}>
              <div className="section-header">
                <span>📝 Additional Information (Custom Fields)</span>
                <span>{sections.additionalInfo ? '▲' : '▼'}</span>
              </div>
              {sections.additionalInfo && (
                <div className="section-content" onClick={handleInputClick}>
                  <textarea placeholder="Additional details"></textarea>
                </div>
              )}
            </div>

            <button className="fullcandbut" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Prop Types validation
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Validate that `isOpen` is a boolean and is required
  onClose: PropTypes.func.isRequired, // Validate that `onClose` is a function and is required
};

export default Sidebar;
