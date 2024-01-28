import React from 'react'
import './Addedit.css'
import firedb from '../Fire'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from "react-toastify"
import { useEffect } from 'react'


var content = {
  name: "",
  email: "",
  Address: "",
  contact: ""
}

const Addedit = () => {
  const [state, setstate] = useState(content)
  const [data, Setdata] = useState({})

  const { name, email, Address, contact } = state

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    firedb.child("Contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        Setdata({ ...snapshot.val() })
      } else {
        Setdata({})
      }
    })

    return () => {
      Setdata({})
    }
  }, [id])

  useEffect(() =>{
    if(id){
      setstate({...data[id]})
    }else{
      setstate({...content})
    }

    return() =>{
      setstate({...content})
    }
  },[id,data])

  const mut = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value })
  }

  const store = (e) => {
    e.preventDefault()
    if (!name || !email || !Address || !contact) {
      toast.error("please Enter Your Detailed")
    } else {
      if(!id){
        firedb.child("Contacts").push(state, (err) => {
          if (err) {
            toast.error(err)
          } else {
            toast.success("Contact Added Successfully")
          }
        })        

      }else{
        firedb.child(`Contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err)
          } else {
            toast.success("Contact Updated Successfully")
          }
        })
      }
      
      setTimeout(() => navigate("/"), 1000)
    }
  }


  return (
    <div style={{ margin: "100px" }}>
      <h1>AddEdit</h1>
      <form action="" style={{ width: "600px", marginLeft: "370px" }}>
        <label htmlFor="">Name</label><input type="text" value={name || ""} onChange={mut} name='name' placeholder='Enter Your Name' />
        <label htmlFor="">Email</label><input type="email" value={email || ""} onChange={mut} name='email' placeholder='Enter Your email' />
        <label htmlFor="">Address</label><input type="Address" value={Address || ""} onChange={mut} name='Address' placeholder='Enter Your Address' />
        <label htmlFor="">Contact</label><input type="Number" value={contact || ""} onChange={mut} name='contact' placeholder='Enter Your contact' />
        {/* <button className='submit' value={id ? "Update" : "Save"} onClick={store}>Save</button> */}
        <input type="submit" value={id ? "Update" : "Save"} onClick={store}/>
      </form>
    </div>
  )
}

export default Addedit
