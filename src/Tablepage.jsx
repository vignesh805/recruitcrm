import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./FormSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import { FaSortAmountUp } from "react-icons/fa";
import "./Table.css";

const TablePage = () => {
  const users = useSelector((state) => state.form.users) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sortedData = [...users];

  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "↑" : "↓";
    }
    return <FaSortAmountUp />;
  };

  return (
    <div className="container">
      {/* Sidebar/Modal for Adding Candidates */}
      <header className="header">
        <div className="title">
          <h2>Candidate List</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="addcand">
          <button className="addbut" onClick={openModal}>
            + Add Candidate
          </button>
          <Sidebar isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </header>

      {/* Candidate List */}
      {!selectedCandidate && (
        <div>
          <table className="Table">
            <thead>
              <tr>
                <th onClick={() => requestSort("firstName")}>
                  First Name {getSortIcon("firstName")}
                </th>
                <th onClick={() => requestSort("lastName")}>
                  Last Name {getSortIcon("lastName")}
                </th>
                <th onClick={() => requestSort("phoneNumber")}>
                  Phone Number {getSortIcon("phoneNumber")}
                </th>
                <th onClick={() => requestSort("whatsappNumber")}>
                  Whatsapp Number {getSortIcon("whatsappNumber")}
                </th>
                <th onClick={() => requestSort("email")}>
                  Email {getSortIcon("email")}
                </th>
                <th onClick={() => requestSort("gender")}>
                  Gender {getSortIcon("gender")}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.length === 0 ? (
                <tr>
                  <td colSpan="7">No users available</td>
                </tr>
              ) : (
                sortedData.map((user, index) => (
                  <tr key={user.id || index}>
                    <td
                      className="clickable"
                      onClick={() => setSelectedCandidate(user)}
                    >
                      {user.firstName}
                    </td>
                    <td>{user.lastName}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.whatsappNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        className="candedit"
                        onClick={() => handleEdit(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="canddelete"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Candidate Details */}
      {selectedCandidate && (
        <div className="candidate-details">
          <button
            className="back-button"
            onClick={() => setSelectedCandidate(null)}
          >
            Go Back
          </button>
          <h2>All Details</h2>
          <p>
            <strong>First Name:</strong> {selectedCandidate.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {selectedCandidate.lastName}
          </p>
          <p>
            <strong>Phone Number:</strong> {selectedCandidate.phoneNumber}
          </p>
          <p>
            <strong>Whatsapp Number:</strong> {selectedCandidate.whatsappNumber}
          </p>
          <p>
            <strong>Email:</strong> {selectedCandidate.email}
          </p>
          <p>
            <strong>Gender:</strong> {selectedCandidate.password}
          </p>
        </div>
      )}

      <footer className="footers">
        Showing {users.length} records from 1 to {users.length} out of{" "}
        {users.length} records
      </footer>
    </div>
  );
};

export default TablePage;
