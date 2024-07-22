import React from 'react';
import './LoanReports.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="loan-reports-body">
      <Sidebar/>
      <div className="loan-reports-content">
        <div className="container">
          <h1 className="mt-4">Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
