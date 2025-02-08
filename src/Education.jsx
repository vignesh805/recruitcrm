import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './Education.css';

function Education({ onclose }) {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    toggleModal(); // Close modal after submission
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="modal">
        <div className="edumodal-content">
          <form onSubmit={handleSubmit}>
            <div className="school">
              <label>School/College Name</label>
              <input type="text" name="name" required />
              <br />
            </div>
            <div className="quaspe">
              <div className="qualification">
                <label>Qualification</label>
                <input type="text" name="qualification" required />
                <br />
              </div>
              <div className="specification">
                <label>Specification</label>
                <input type="text" name="specification" required />
                <br />
              </div>
            </div>

            <div className="graloc">
              <div className="grade">
                <label>Grade</label>
                <input type="text" name="grade" required />
                <br />
              </div>
              <div className="location">
                <label>Location</label>
                <input type="text" name="location" required />
                <br />
              </div>
            </div>

            <div className="staend">
              <div className="start">
                <label>Start Date</label>
                <input type="date" id="start" name="start" required />
              </div>
              <div className="end">
                <label>End Date</label>
                <input type="date" id="end" name="end" required />
              </div>
            </div>

            <div className="ingr9">
              <p><label>Description</label></p>
              <textarea rows="6" cols="68" required></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
            <button onClick={onclose} className="close-button">Close</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
Education.propTypes = {
  onclose: PropTypes.func.isRequired, // Validate onclose as a required function
};

export default Education;
