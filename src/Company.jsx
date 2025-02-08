import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './FormSlice';
import { useNavigate } from 'react-router-dom';
import Comsidebar from './Comsidebar.jsx';
import { FaSortAmountUp } from "react-icons/fa";
import './Company.css';

const Company = () => {
  const users = useSelector((state) => state.form.users) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

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
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    }
    return <FaSortAmountUp />;
  };

  return (
    <div>
      <div className='tabcans'>
        <header className='header'>
          <div className='title'>
            <h2>Company List</h2>
          </div>
          <div className='search'>
            <input type="text" placeholder='Search' />
          </div>
          
          <div className='addcand'>
            <button className='addbut' onClick={openModal}>+ Add Company</button>
            <Comsidebar isOpen={isModalOpen} onClose={closeModal} />
          </div>



        </header>
     
      
      <div>
      <table className='Table' >
        <thead>
          <tr>
            <th onClick={() => requestSort('firstName')}>
             Company Name {getSortIcon('firstName')}
            </th>
            <th onClick={() => requestSort('lastName')}>
              Industry {getSortIcon('lastName')}
            </th>
            <th onClick={() => requestSort('phoneNumber')}>
            Full Address {getSortIcon('phoneNumber')}
            </th>
            <th onClick={() => requestSort('whatsappNumber')}>
             Website {getSortIcon('whatsappNumber')}
            </th>
            <th onClick={() => requestSort('email')}>
              open Jobs{getSortIcon('email')}
            </th>
            <th onClick={() => requestSort('password')}>
              closed Jobs {getSortIcon('password')}
            </th>
            <th onClick={() => requestSort('owner')}>
              owner {getSortIcon('owner')}
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
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.whatsappNumber}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.password}</td>
      
                <td>
                  <button className='candedit' onClick={() => handleEdit(user.id)}>Edit</button>
                  <button className='canddelete' onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
</div>

<footer className='footers'>
      Showing 1 records from 1 to 1 out of 1 records
     </footer>
</div>
  

    </div>



  );
};

export default Company;
