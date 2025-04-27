import React from 'react';
import firedb from '../DB/Fire';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash, FaEye, FaUser } from 'react-icons/fa';
import '../assets/CSS/Home.css';

const Home = () => {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    firedb.child("Contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      firedb.child(`Contacts/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact deleted successfully");
        }
      });
    }
  };

  const filteredData = Object.keys(data).filter(id => {
    const contact = data[id];
    return (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.contact.includes(searchTerm)
    );
  });

  return (
    <div className="home-container">
      <div className="header-container">
        <h1 className="page-title">Contact Manager</h1>
        <div className="search-add-container">
          <input
            type="text"
            placeholder="Search contacts..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/add" className="add-button">
            + Add Contact
          </Link>
        </div>
      </div>

      <div className="table-responsive">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((id, index) => {
                const contact = data[id];
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">
                          {contact.photoURL ? (
                            <img src={contact.photoURL} alt={contact.name} />
                          ) : (
                            <FaUser />
                          )}
                        </div>
                        {contact.name}
                      </div>
                    </td>
                    <td>{contact.email}</td>
                    <td>{contact.address}</td>
                    <td>{contact.contact}</td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`/Update/${id}`} className="action-button edit">
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => handleDelete(id)}
                          className="action-button delete"
                        >
                          <FaTrash />
                        </button>
                        <Link to={`/View/${id}`} className="action-button view">
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="no-contacts">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
