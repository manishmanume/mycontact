import React from 'react'
import firedb from '../Fire'
import { Link } from 'react-router-dom'
import './Home.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'


const Home = () => {

  var [data, Setdata] = useState({})

 useEffect(() =>{
  firedb.child("Contacts").on("value", (snapshot) =>{
    if(snapshot.val() !==null){
      Setdata({...snapshot.val()})
    }else{
      Setdata({})
    }
  })

  return() =>{
    Setdata({})
  }
 },[])

 const delet = (id) => {
  if(window.confirm("Are You Sure that You want to delete Contact?")){
    firedb.child(`Contacts/${id}`).remove((err) =>{
      if(err){
        toast.error(err)
      }else{
        toast.success("Contact Deleted Successfully")
      }
    })
  }
 }

  
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Home</h2>

      <table className='style-table'>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
              <th scope='row'>{index + 1}</th>
              <td>{data[id].name}</td>
              <td>{data[id].email}</td>
              <td>{data[id].Address}</td>
              <td>{data[id].contact}</td>
              <td>
                <Link to={`/Update/${id}`}>
                  <button className='btn btn-edit'>Edit</button>
                </Link>
                <button className='btn btn-delete' onClick={() => delet(id)}>Delete</button>
                <Link to={`/View/${id}`}>
                  <button className='btn btn-view'>View</button>
                </Link>
              </td>
              </tr>
              
            )
          })
        }
        </tbody>
        
      </table>
    </div>
  )
}

export default Home
