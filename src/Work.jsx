import './Work.css';
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation

function Work({ onclose }) {
  const [toggle, setToggle] = useState(false);

  // Toggling the "currently working" status
  const handle = () => {
    setToggle(!toggle);
    console.log(toggle, 'value');
  };

  // Handle form submission
  const handlesSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    onclose(); // Close modal after submission
  };

  return (
    <>
      <div className="workform">
        <div className="body">
          <form onSubmit={handlesSubmit}>
            <div className="worload">
              <div className="comname">
                <label>Title</label>
                <input type="text" name="title" required />
              </div>
              <div className="comname">
                <label>Company name</label>
                <input type="text" name="companyname" required />
              </div>

              <div className="empind">
                <div className="emptype">
                  <label>Employment type</label>
                  <input
                    list="data"
                    placeholder="Please Select & Search"
                    name="employmenttype"
                    required
                  />
                  <datalist id="data">
                    <option>Part Time</option>
                    <option>Full Time</option>
                    <option>Contract</option>
                    <option>Self-Employed</option>
                    <option>Contract</option>
                    <option>Apprenticeship</option>
                  </datalist>
                </div>
                <div className="industry">
                  <label>Industry type</label>
                  <input
                    list="datas"
                    placeholder="Please Select & Search"
                    name="industrytype"
                    required
                  />
                  <datalist id="datas">
                    <option>None</option>
                    <option>Accounting</option>
                    <option>Airlines/Aviation</option>
                    <option>Architecture and Planning</option>
                    <option>Apparel and Fashion</option>
                    <option>Software Developer</option>
                  </datalist>
                </div>
              </div>

              <div className="locsal">
                <div className="locat">
                  <label>Location</label>
                  <input type="text" name="location" required />
                </div>
                <div className="salary">
                  <label>Salary</label>
                  <input type="number" name="salary" required />
                </div>
              </div>

              <div className="currently">
                <label>Currently working in this role</label>
                <div
                  onClick={handle}
                  className={`who ${toggle ? 'active' : ''}`}
                >
                  {toggle ? <div className="right"></div> : <div className="left"></div>}
                </div>
              </div>

              <div className="worstaend">
                <div className="workstart">
                  <label>Start date</label>
                  <input type="date" name="startdate" required />
                </div>
                <div className="workend">
                  <label>End date</label>
                  <input type="date" name="enddate" required />
                </div>
              </div>

              <div className="des">
                <p>
                  <label>Description</label>
                </p>
                <textarea name="textarea" rows="6" cols="68" required></textarea>
              </div>

              <button type="submit" className="worksubmit">
                Submit
              </button>

              <button type="button" className="workclose" onClick={onclose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// PropTypes validation
Work.propTypes = {
  onclose: PropTypes.func.isRequired, // Validate that `onclose` is a required function
};

export default Work;
