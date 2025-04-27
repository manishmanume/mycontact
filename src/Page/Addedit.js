import React from 'react';
import '../assets/CSS/Addedit.css';
import firedb from '../DB/Fire';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from "react-toastify";
import { FiUser, FiMail, FiHome, FiPhone, FiSave, FiEdit2, FiX } from 'react-icons/fi';

const initialState = {
  name: "",
  email: "",
  Address: "",
  contact: ""
};

const Addedit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const { name, email, Address, contact } = state;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    firedb.child("Contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
      setLoading(false);
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !Address || !contact) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    
    if (!id) {
      firedb.child("Contacts").push(state, (err) => {
        setLoading(false);
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact added successfully!");
          setTimeout(() => navigate("/"), 1000);
        }
      });
    } else {
      firedb.child(`Contacts/${id}`).set(state, (err) => {
        setLoading(false);
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact updated successfully!");
          setTimeout(() => navigate("/"), 1000);
        }
      });
    }
  };

  return (
    <div className="professional-form-container">
      <div className="professional-form-card">
        <div className="form-header">
          <h2 className="form-title">
            {id ? (
              <>
                <FiEdit2 className="form-icon" /> Edit Contact
              </>
            ) : (
              <>
                <FiUser className="form-icon" /> Add New Contact
              </>
            )}
          </h2>
          <p className="form-subtitle">Please {id ? "update" : "enter"} the contact details below</p>
        </div>
        
        <form onSubmit={handleSubmit} className="professional-form">
          <div className="form-row">
            <div className="form-group name-group">
              <label htmlFor="name" className="form-label">
                <FiUser className="input-icon" /> Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name || ""}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="form-input"
              />
            </div>
            
            <div className="form-group email-group">
              <label htmlFor="email" className="form-label">
                <FiMail className="input-icon" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email || ""}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="address" className="form-label">
              <FiHome className="input-icon" /> Address
            </label>
            <input
              type="text"
              id="address"
              name="Address"
              value={Address || ""}
              onChange={handleInputChange}
              placeholder="123 Main St, City, Country"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              <FiPhone className="input-icon" /> Phone Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={contact || ""}
              onChange={handleInputChange}
              placeholder="+1 234 567 8900"
              className="form-input"
            />
          </div>
          
          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-outline"
            >
              <FiX className="btn-icon" /> Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner"></span>
              ) : id ? (
                <>
                  <FiEdit2 className="btn-icon" /> Update Contact
                </>
              ) : (
                <>
                  <FiSave className="btn-icon" /> Save Contact
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addedit;
