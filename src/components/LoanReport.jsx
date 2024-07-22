import React from 'react';
import './LoanReports.css';
import Sidebar from './Sidebar';


const LoanReports = () => {
  return (
    <div className="loan-reports-body">
     
      <Sidebar/>
      <div className="loan-reports-content">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3 loan-reports-card-bg">
                <div className="card-header loan-reports-card-header">In Progress Loan Applications</div>
                <div className="card-body loan-reports-card-body">
                  <h5 className="card-title">5 Applications</h5>
                  <i className="fas fa-spinner fa-spin" style={{ fontSize: '24px' }}></i> In Progress
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3 loan-reports-card-bg">
                <div className="card-header loan-reports-card-header">Submitted Loan Applications</div>
                <div className="card-body loan-reports-card-body">
                  <h5 className="card-title">5 Applications</h5>
                  <i className="fas fa-check-circle" style={{ fontSize: '24px' }}></i> Submitted
                </div>
              </div>
            </div>
          </div>
          <table className="table table-bordered loan-reports-table">
            <thead className="thead-dark">
              <tr>
                <th colSpan="3">
                  <h1 className="loan-reports-recent-articles">Loan Applications</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Application No.</th>
                <th>Application Date</th>
                <th>Application Status</th>
              </tr>
              <tr>
                <td>001</td>
                <td>2024-01-01</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>002</td>
                <td>2024-01-15</td>
                <td>Submitted</td>
              </tr>
              <tr>
                <td>003</td>
                <td>2024-02-01</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>004</td>
                <td>2024-02-20</td>
                <td>Submitted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoanReports;
