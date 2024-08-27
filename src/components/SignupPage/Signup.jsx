import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: ''
  })
  const [error, setError] = useState({})

  //handle onchange event here 
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // validating our input 

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name cannot be empty'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid Email address, provide a valid email'
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Please Input your phone number'
    }
    if (!formData.address) {
      newErrors.address = 'Please enter your address'
    }
    if (!formData.password | formData.password.length < 6) {
      newErrors.password = "Enter your password, it must be greater than 6 digit "
    }
    return newErrors;
  }

  // handle form subission 
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationError = validate()
    if (Object.keys(validationError).length === 0) {
      console.log('formData submited successfully', formData)
    } else {
      setError(validationError)
    }
  }

  return (
    <div className='Signupmain'>
      <div className='SignupWrap'>
        <div className='SignupHeader'>
          <h1 className='SignupHeaderBold'>Signup Now To Have Access Too Our Product </h1>
          <form className='SignupBodyInputDiv' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              className='SignupBodyInput'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && <p>{error.name}</p>}
            <input
              type='Number'
              placeholder='PhoneNumber'
              className='SignupBodyInput'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {error.phoneNumber && <p>{error.phoneNumber}</p>}
            <input
              type='text'
              placeholder='Email'
              className='SignupBodyInput'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p>{error.email}</p>}
            <input
              type='text'
              placeholder='Address'
              className='SignupBodyInput'
              name='address'
              value={formData.address}
              onChange={handleChange}
            />
            {error.address && <p>{error.address}</p>}
            <input
              type='text'
              placeholder='Password'
              className='SignupBodyInput'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            {error.password && <p>{error.password}</p>}
            <button type='submit'>Create account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup