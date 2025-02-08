import  { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './Comsidebar.css';
import ContactDetails from './ContactDetails';

const Contactsidebar = ({ isOpen, onClose }) => {
  // State for section toggles
  const [sections, setSections] = useState({
    personalInfo: false,
    workHistory: false,
    educationHistory: false,
    employmentInfo: false,
    resumeSkills: false,
    socialLinks: false,
    additionalInfo: false,
  });

  // Toggle section visibility
  const toggleSection = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  // Prevent collapsing the section when clicking inside
  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  // Handle form submission (to be expanded)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className={`side-modal ${isOpen ? 'open' : ''}`}>
      <button className="close-buttons" onClick={onClose}>X</button>
      <div className="modal-content">
        <div className="form-containers">
          <h2 className='candsid'>Add Contact</h2>
          
          {/* Section for Contact Details */}
          <div className="section" onClick={() => toggleSection('personalInfo')}>
            <div className="section-header">
              <span>📋 Contact Details</span>
              <span>{sections.personalInfo ? '▲' : '▼'}</span>
            </div>
            {sections.personalInfo && (
              <div className="section-content" onClick={handleInputClick}>
                <ContactDetails />
              </div>
            )}
          </div>

          {/* Submit Form */}
          <form onSubmit={handleSubmit}>
            <button className="fullcandbut" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Contactsidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // Validate isOpen prop as a required boolean
  onClose: PropTypes.func.isRequired, // Validate onClose prop as a required function
};

export default Contactsidebar;
