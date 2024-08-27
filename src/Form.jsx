import React, { useState } from 'react'
import './Form.css'
const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userDetails = {
            firstName,
            lastName,
            middleName,
            phoneNumber,
            email,
        }
        console.log(userDetails)
        localStorage.setItem('userinfo', JSON.stringify(userDetails))
    }
    
    return (
        <div className='FormMain'>
            <form className='FormWrap'>
                <span className='InputWrap'>
                    <label>First name</label>
                    <input
                        type="text"
                        placeholder='First Name'
                        className='Inputs'
                        name='firstName'
                        value={firstName}
                        // value={state.firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        // onChange={handleChange}
                    />
                </span>
                <span className='InputWrap'>
                    <label>Last name</label>
                    <input
                        type="text"
                        placeholder='Last Name'
                        className='Inputs'
                        name='lastName'
                        value={lastName}
                        // value={state.lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        // onChange={handleChange}
                    />
                </span>
                <span className='InputWrap'>
                    <label>Middle name</label>
                    <input
                        type="text"
                        placeholder='Middle Name'
                        className='Inputs'
                        name='middleName'
                        value={middleName}
                        // value={state.middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        // onChange={handleChange}
                    />
                </span>
                <span className='InputWrap'>
                    <label>Email Address</label>
                    <input
                        type="text"
                        placeholder='Email Address'
                        className='Inputs'
                        name='email'
                        value={email}
                        // value={state.email}
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={handleChange}
                    />
                </span>
                <span className='InputWrap'>
                    <label>Phone Number</label>
                    <input
                        type="number"
                        placeholder='Phone Number'
                        className='Inputs'
                        name='phoneNumber'
                        value={phoneNumber}
                        // value={state.phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        // onChange={handleChange}
                    />
                </span>
                <button onClick={handleSubmit} className='FormButton'>Create account</button>
            </form>
        </div>
    )
}

export default Form