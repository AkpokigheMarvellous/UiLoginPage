import React from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios'

const Contact = () => {

    const {register, handleSubmit } = useForm();

    const SubmitForm = (data, e) => { 
      e.preventDefault();               
        axios.post("http://localhost:8000/api/contact/", data).then((response) => {
            console.log(response.data)
        })

        alert("form submitted successfully")
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit(SubmitForm)}>
        <h3>Contact</h3>
        <div className="mb-3">
          <label>name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name='name'
            {...register('name')}
          />
        </div>
        <div className="mb-3">
          <label>email</label>
          <input type="email" className="form-control" 
          placeholder="email" name='email' 
          {...register('email')}/>
        </div>
        <div className="mb-3">
          <label>message</label>
          <input
            type="text"
            className="form-control"
            placeholder="message"
            name='massege'
            {...register('massege')}
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Contact
