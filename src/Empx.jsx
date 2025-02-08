import { useState, useEffect, useRef } from 'react';
import './Empx.css';

function Empx() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [Empdata, setEmpdata] = useState({
    currentorganization: "",
    title: "",
    totalexperience: "",
    relevantexperience: "",
    salarytype: "",
    currencytype: "",
    currentsalary: "",
    salaryexpectation: "",
    employeestatus: "",
    noticeperiod: "",
    availableform: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setEmpdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Empdata);  // Handle submission logic here
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle dropdown visibility
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button> {/* Button to toggle dropdown */}
      <form onSubmit={handleSubmit}>
        <div className={`dropdown-content ${isOpen ? 'open' : ''}`}> {/* Show dropdown content if isOpen is true */}
          <div className="formem">
            <div className="curtitle">
              <div className="currents">
                <label>Current Organization</label>
                <input
                  list="empxdata"
                  name="currentorganization"
                  value={Empdata.currentorganization}
                  onChange={handle}
                  placeholder="Please Select & Search"
                />
                <datalist id="empxdata">
                  <option value="TCS"></option>
                  <option value="CTS"></option>
                  <option value="INFOSYS"></option>
                  <option value="WIPRO"></option>
                  <option value="ACCENTURE"></option>
                  <option value="COMCAST"></option>
                </datalist>
              </div>
              <div className="emptil">
                <label>Title</label>
                <input
                  name="title"
                  value={Empdata.title}
                  onChange={handle}
                  type="text"
                />
              </div>
            </div>

            {/* Other Input Fields... */}

            <div className="avail">
              <label>Available From</label>
              <input
                type="date"
                name="availableform"
                value={Empdata.availableform}
                onChange={handle}
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Empx;
