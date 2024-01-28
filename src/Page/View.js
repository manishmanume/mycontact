import React from 'react'
import {useState,useEffect} from 'react'
import firedb from '../Fire'
import './View.css'
import { useParams, Link } from 'react-router-dom'

const View = () => {
  const [contact, setcontact] = useState({})

  const {id} = useParams()
  useEffect(()=>{
    firedb.child(`Contacts/${id}`).get().then((snapshot) =>{
      if(snapshot.exists()){
        setcontact({...snapshot.val()})
      }else{
        setcontact({})
      }
    })
  },[id])

  console.log("contact" , contact)
  return (
    <div style={{marginTop:"150px"}}>
      <h2>View </h2>
      <div className='card'>
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{contact.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{contact.email}</span>
          <br />
          <br />
          <strong>Address:</strong>
          <span>{contact.Address}</span>
          <br />
          <br />
          <strong>Contacts:</strong>
          <span>{contact.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className='btn btn-edit'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View
