import React, { useState } from 'react';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    Address: '',
    purchaseDate: '',
    ExpireDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Registration Form for the Donation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Medicines Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Your Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Address">Your Address:</label>
          <input
            type="text"
            id="Address"
            name="Address" // Corrected the 'name' attribute
            value={formData.Address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="purchaseDate">Purchase Date:</label>
          <input
            type="date"
            id="purchaseDate"
            name="purchaseDate" // Corrected the 'name' attribute
            value={formData.purchaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ExpireDate">Expire Date:</label>
          <input
            type="date"
            id="ExpireDate"
            name="ExpireDate" // Corrected the 'name' attribute
            value={formData.ExpireDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Donation;
