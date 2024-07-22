// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="loan-reports-sidebar">
      {/* <h4 className="text-center py-3 loan-reports-custom-bg">Loan App</h4> */}
      <a href="/">
        <i className="fas fa-tachometer-alt" ></i> Dashboard
      </a>
      <a href="/loanapplication">
        <i className="fas fa-file-alt"></i> Loan Application
      </a>
      <a href="/loanreport">
        <i className="fas fa-chart-bar"></i> Loan Reports
      </a>
    </div>
  );
};

export default Sidebar;
