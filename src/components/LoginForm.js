import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dateOfBirth: '',
    firstName: '',
    lastName: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '' // Clear the error for the field when user starts typing
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='outline'>
    <form className="signup-form" onSubmit={handleSubmit}>
         
      <div className="form-group">
      <div className="header-container">
            <h1>Create a new account</h1>
            <h4>It's quick and easy.</h4>
         </div>
        <label>Gmail:</label>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Mobile number or email address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-symbol">!</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Password:</label>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="New password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-symbol">!</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Date of birth:</label>
        <div className="input-container">
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={errors.dateOfBirth ? 'error' : ''}
          />
          {errors.dateOfBirth && <span className="error-symbol">!</span>}
        </div>
      </div>

      <div className="form-group">
        <label>First Name:</label>
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <span className="error-symbol">!</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <div className="input-container">
          <input
            type="text"
            name="lastName"
            placeholder="Surname"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <span className="error-symbol">!</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div className="input-container gender-container">
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            className={errors.gender ? 'error' : ''}
          /> Female
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            className={errors.gender ? 'error' : ''}
          /> Male
          <input
            type="radio"
            name="gender"
            value="custom"
            onChange={handleChange}
            className={errors.gender ? 'error' : ''}
          /> Custom
          {errors.gender && <span className="error-symbol">!</span>}
        </div>
      </div>

      <button type="submit" className="submit-button">Sign Up</button>
      <p>Already have an account? <a href="#">Log in</a></p>
    </form>
    </div>
  );
}

export default LoginForm;
