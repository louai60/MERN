import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value.trim() === '') {
      setErrors({
        ...errors,
        [`${name}Error`]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
      });
    } else if (name === 'firstName' && value.length < 2) {
      setErrors({
        ...errors,
        firstNameError: 'First Name must be at least 2 characters.',
      });
    } else if (name === 'lastName' && value.length < 2) {
      setErrors({
        ...errors,
        lastNameError: 'Last Name must be at least 2 characters.',
      });
    } else if (name === 'email' && value.length < 5) {
      setErrors({
        ...errors,
        emailError: 'Email must be at least 5 characters.',
      });
    } else if (name === 'password' && value.length < 8) {
      setErrors({
        ...errors,
        passwordError: 'Password must be at least 8 characters.',
      });
    } else if (name === 'confirmPassword' && value !== formData.password) {
      setErrors({
        ...errors,
        confirmPasswordError: 'Passwords must match.',
      });
    } else {
      setErrors({
        ...errors,
        [`${name}Error`]: '',
      });
    }
  };

  return (
    <div className="container m-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3 row">
              <div className='col-md-3'>
               <label htmlFor="firstName" className="form-label">First Name:</label>
              </div>
              <div className='col-md-9'>
              <input type="text" id="firstName" name="firstName" className={`form-control ${errors.firstNameError ? 'is-invalid' : ''}`} value={formData.firstName} onChange={handleChange} />
              {errors.firstNameError && (
                <div className="invalid-feedback">{errors.firstNameError}</div>
              )}
              </div>
            </div>
            <div className="mb-3 row">
              <div className='col-md-3'>
                <label htmlFor="lastName" className="form-label">Last Name:</label>
              </div>
              <div className='col-md-9'>
                <input type="text" id="lastName" name="lastName" className={`form-control ${errors.lastNameError ? 'is-invalid' : ''}`} value={formData.lastName} onChange={handleChange} />
                {errors.lastNameError && (
                    <div className="invalid-feedback">{errors.lastNameError}</div>
                )}
              </div>
            </div>
            <div className="mb-3 row">
              <div className='col-md-3'>
                <label htmlFor="email" className="form-label">Email:</label>
              </div>
              <div className='col-md-9'>
                <input type="email" id="email" name="email" className={`form-control ${errors.emailError ? 'is-invalid' : ''}`} value={formData.email} onChange={handleChange} />
                {errors.emailError && (
                    <div className="invalid-feedback">{errors.emailError}</div>
                )}
              </div>
            </div>
            <div className="mb-3 row">
              <div className='col-md-3'>
                <label htmlFor="password" className="form-label">Password:</label>
              </div>
              <div className='col-md-9'>
                <input type="password" id="password" name="password" className={`form-control ${errors.passwordError ? 'is-invalid' : ''}`} value={formData.password} onChange={handleChange} />
                {errors.passwordError && (
                    <div className="invalid-feedback">{errors.passwordError}</div>
                )}
              </div>
            </div>
            <div className="mb-3 row">
              <div className='col-md-3'>
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              </div>
              <div className='col-md-9'>
                <input type="password" id="confirmPassword"  name="confirmPassword" className={`form-control ${errors.confirmPasswordError ? 'is-invalid' : ''}`} value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPasswordError && (
                    <div className="invalid-feedback">{errors.confirmPasswordError}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
