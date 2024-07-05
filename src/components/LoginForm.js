import React, {useState} from 'react';
import './LoginForm.css'

 function LoginForm() {
  return (
    <>
       

       <form className="signup-form" >

       <h1>Create a new account</h1> 
       <h4>It's quick and easy.</h4>

       <div className="form-group">
       <label>Gmail: </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Mobile number or email address"
                    // value={formData.email}
                    // onChange={}
                    required
                />
            </div>

            <div className="form-group">
            <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    placeholder="New password"
                    // value={formData.password}
                    // onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
    <label>Date of birth</label>
    <input
        type="date"
        name="dateOfBirth"
        // value={formData.dateOfBirth}
        // onChange={handleChange}
        required
    />
       </div>

       <div className="form-group">
       <label>FirstName:  </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    // value={formData.firstName}
                    // onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
            <label>LastName:  </label>
                <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    // value={formData.surname}
                    // onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Gender</label>
                <div className="gender-options">
                    <input
                        type="radio"
                        name="gender"
                        // value="female"
                        // onChange={handleChange}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        // value="male"
                        // onChange={handleChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        // value="custom"
                        // onChange={handleChange}
                    /> Custom
                </div>
            </div>
       



            <button type="submit" className="submit-button">Sign Up</button>
            <p>Already have an account? <a href="#">Log in</a></p>
 </form>

        
        </>
  )
}


export default LoginForm
