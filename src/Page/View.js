import React from 'react';
import { useState, useEffect } from 'react';
import firedb from '../DB/Fire';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiHome, FiPhone, FiEdit2 } from 'react-icons/fi';
import '../assets/CSS/View.css';

const View = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    firedb.child(`Contacts/${id}`).get().then((snapshot) => {
      if (snapshot.exists()) {
        setContact({ ...snapshot.val() });
      } else {
        setContact({});
      }
    });
  }, [id]);

  const nameHash = contact.name ? contact.name.charCodeAt(0) % 5 : 0;
  const gradients = [
    'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',  
    'linear-gradient(135deg, #10b981 0%, #059669 100%)',  
    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',   
    'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',  
    'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'   
  ];
  const avatarGradient = gradients[nameHash];

  return (
    <div className="view-container">
      <div className="view-card">
        <div className="view-header" style={{ background: avatarGradient }}>
          <Link to="/" className="view-back-btn">
            <FiArrowLeft size={20} />
          </Link>
          <div className="view-avatar-container">
            <div 
              className="view-avatar"
              style={{
                background: contact.photoURL ? 'transparent' : avatarGradient,
                border: contact.photoURL ? '3px solid rgba(255,255,255,0.3)' : 'none'
              }}
            >
              {contact.photoURL ? (
                <img src={contact.photoURL} alt={contact.name} />
              ) : (
                <span className="view-avatar-initial">
                  {contact.name ? contact.name.charAt(0).toUpperCase() : '?'}
                </span>
              )}
            </div>
          </div>
          <h1 className="view-name">{contact.name}</h1>
          <p className="view-title">Contact Details</p>
        </div>

        <div className="view-body">
          <div className="view-details-grid">
            <div className="view-detail-card">
              <div className="view-icon-container" style={{ background: avatarGradient }}>
                <FiMail className="view-icon" />
              </div>
              <div className="view-detail-content">
                <p className="view-detail-label">Email</p>
                <p className="view-detail-value">{contact.email || 'Not provided'}</p>
              </div>
            </div>

            <div className="view-detail-card">
              <div className="view-icon-container" style={{ background: avatarGradient }}>
                <FiHome className="view-icon" />
              </div>
              <div className="view-detail-content">
                <p className="view-detail-label">Address</p>
                <p className="view-detail-value">{contact.Address || 'Not provided'}</p>
              </div>
            </div>

            <div className="view-detail-card">
              <div className="view-icon-container" style={{ background: avatarGradient }}>
                <FiPhone className="view-icon" />
              </div>
              <div className="view-detail-content">
                <p className="view-detail-label">Phone</p>
                <p className="view-detail-value">{contact.contact || 'Not provided'}</p>
              </div>
            </div>
          </div>

          <div className="view-footer">
            <Link to={`/update/${id}`} className="view-edit-btn" style={{ background: avatarGradient }}>
              <FiEdit2 size={18} /> Edit Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;