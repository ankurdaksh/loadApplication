import { useState } from 'react'
import React from 'react'
import Sidebar from './Sidebar';
import './LoanApplication.css'

const LoanApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    panCard: '',
    aadhaarCard: '',
    contactDetails: '',
    panFile: null,
    aadhaarFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({});
    alert('Application submitted successfully!');
  };

  return (
    <div className="loan-reports-body">
      <Sidebar />
      <div className='loan-reports-content'>
        <div className="stepper-form">
          {currentStep === 1 && (
            <div className="form-step">
              <h3>Applicant Personal Details</h3>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>PAN Card</label>
                <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Aadhaar Card</label>
                <input type="text" name="aadhaarCard" value={formData.aadhaarCard} onChange={handleChange} />
              </div>
              <div className="form-buttons">
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="form-step">
              <h3>Applicant Contact Details</h3>
              <div className="form-group">
                <label>Contact Details</label>
                <input type="text" name="contactDetails" value={formData.contactDetails} onChange={handleChange} />
              </div>
              <div className="form-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="form-step">
              <h3>Document Upload</h3>
              <div className="form-group">
                <label>Upload PAN Card</label>
                <input type="file" name="panFile" onChange={handleFileChange} />
              </div>
              <div className="form-group">
                <label>Upload Aadhaar Card</label>
                <input type="file" name="aadhaarFile" onChange={handleFileChange} />
              </div>
              <div className="form-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanApplication;
