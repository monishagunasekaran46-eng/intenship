import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "./internAllocation.css";
import internData from "../data/internData";

function Allocation() {
  const navigate = useNavigate();

  const student = {
    fullName: internData.intern.name,
    email: internData.intern.email,
    contactNumber: "8050793405",
    collegeName: "Adhiyamaan College",
    branch: "Computer Science",
    year: "3rd Year",
  };

  const [domain, setDomain] = useState(
    internData.intern.domain
  );

  const [allocated, setAllocated] = useState(false);

 const handleAllocation = async () => {
  const result = await Swal.fire({
    icon: "success",
    title: "Internship Allocated",
    text: `${domain} Internship Allocated Successfully`,
    confirmButtonColor: "#ff6200",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
  });

  if (result.isConfirmed) {
    setAllocated(true);

    navigate("/dashboard");
  }
};

  return (
    <div className="allocation-container">

      <div className="allocation-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Intern Management and Allocation</p>
      </div>

      <div className="success-banner">
        ✅ Registration Completed Successfully
      </div>

      <div className="student-card">
        <h2>Student Information</h2>

        <div className="info-grid">

          <div className="info-item">
            <span>Name</span>
            <strong>{student.fullName}</strong>
          </div>

          <div className="info-item">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

          <div className="info-item">
            <span>Contact Number</span>
            <strong>{student.contactNumber}</strong>
          </div>

          <div className="info-item">
            <span>College Name</span>
            <strong>{student.collegeName}</strong>
          </div>

          <div className="info-item">
            <span>Branch</span>
            <strong>{student.branch}</strong>
          </div>

          <div className="info-item">
            <span>Year</span>
            <strong>{student.year}</strong>
          </div>

        </div>
      </div>

      <div className="allocation-form">
        <h2>Internship Domain Allocation</h2>

        <p className="allocation-subtitle">
          Select a domain for internship assignment
        </p>

        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option>Frontend Development</option>
          <option>Backend Development</option>
          <option>Full Stack Development</option>
          <option>Cloud Computing</option>
          <option>DevOps</option>
          <option>Data Engineering</option>
        </select>

        <button
          className="allocate-btn"
          onClick={handleAllocation}
        >
          Allocate Internship
        </button>

        {allocated && (
          <div className="success-card">
            <h3>Allocation Successful 🎉</h3>

            <p>
              <strong>Student:</strong> {student.fullName}
            </p>

            <p>
              <strong>Domain:</strong> {domain}
            </p>

            <p>
              <strong>Status:</strong> Active
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Allocation;