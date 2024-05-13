import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Check for validation errors
    if (name === 'name' || name === 'email') {
      const isValid = name === 'email' ? validateEmail(value) : value.trim() !== '';
      setValidationErrors({
        ...validationErrors,
        [name]: !isValid
      });
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'name' || name === 'email') {
      const isValid = name === 'email' ? validateEmail(value) : value.trim() !== '';
      setValidationErrors({
        ...validationErrors,
        [name]: !isValid
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message
    setSuccessMessage('Form submitted successfully!');
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <section className="contact py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className={`form-control ${validationErrors.name && 'is-invalid'}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {validationErrors.name && <div className="invalid-feedback">Name is required</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className={`form-control ${validationErrors.email && 'is-invalid'}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {validationErrors.email && <div className="invalid-feedback">Please enter a valid email address</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {successMessage && (
          <div className="alert alert-success mt-3">{successMessage}</div>
        )}
      </div>
    </section>
  );
}

export default Contact;
