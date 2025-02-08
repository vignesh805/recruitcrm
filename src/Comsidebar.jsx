import { useState } from 'react';
import './Comsidebar.css';
import CompanyDetails from './CompanyDetails';
import ContactDetails from './ContactDetails';
import PropTypes from 'prop-types';

const Comsidebar = ({ isOpen, onClose }) => {
  const [sections, setSections] = useState({
    personalInfo: false,
    workHistory: false,
    educationHistory: false,
    employmentInfo: false,
    resumeSkills: false,
    socialLinks: false,
    additionalInfo: false,
  });

  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const [showModals, setShowModals] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    toggleModals(); // Close modal after submission
  };

  const toggleModals = () => {
    setShowModals(!showModals);
  };

  return (
    <div className={`side-modal ${isOpen ? 'open' : ''}`}>
      <button className="close-buttons" onClick={onClose}>X</button>
      <div className="modal-content">
        <div className="form-containers">
          <h2 className='candsid'>Add Company</h2>

          <div className="section" onClick={() => toggleSection('personalInfo')}>
            <div className="section-header">
              <span>👤 Company Details</span>
              <span>{sections.personalInfo ? '▲' : '▼'}</span>
            </div>
            {sections.personalInfo && (
              <div className="section-content" onClick={handleInputClick}>
                <CompanyDetails />
              </div>
            )}
          </div>

          <div className="section" onClick={() => toggleSection('workHistory')}>
            <div className="section-header">
              <span>📋 Contact Details</span>
              <span>{sections.workHistory ? '▲' : '▼'}</span>
            </div>
            {sections.workHistory && (
              <div className="section-content" onClick={handleInputClick}>
                <ContactDetails />
              </div>
            )}
          </div>

          {/* Add other sections as needed... */}

          <form onSubmit={handleSubmit}>
            <button className="fullcandbut" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Comsidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Comsidebar;
