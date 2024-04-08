import React, { useState } from 'react';

const Form = () => {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const displayData = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input type="text" name="firstName" className="form-control" value={Data.firstName} onChange={displayData} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input type="text" name="lastName" className="form-control" value={Data.lastName} onChange={displayData} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" name="email" className="form-control" value={Data.email} onChange={displayData} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" name="password" className="form-control" value={Data.password} onChange={displayData} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input type="password" name="confirmPassword" className="form-control" value={Data.confirmPassword} onChange={displayData} />
            </div>
          </form>
          <div>
            <h2>Your Form Data:</h2>
            <p>First Name: {Data.firstName}</p>
            <p>Last Name: {Data.lastName}</p>
            <p>Email: {Data.email}</p>
            <p>Password: {Data.password}</p>
            <p>Confirm Password: {Data.confirmPassword}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
