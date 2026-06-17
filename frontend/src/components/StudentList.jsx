import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./studentList.css";

function StudentList() {
const [students, setStudents] = useState([]);
const [search, setSearch] = useState("");

const navigate = useNavigate();

useEffect(() => {
fetchStudents();
}, []);

const fetchStudents = async () => {
try {
const response = await fetch(
"http://localhost:5001/api/interns"
);

  const data = await response.json();
  setStudents(data);
} catch (error) {
  console.error(error);
}


};

const openDashboard = (student) => {
navigate("/dashboard", {
state: student,
});
};

const filteredStudents = students.filter((student) =>
student.full_name
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div className="student-page">


  <div className="top-banner">
    <h1>AR Infotek</h1>
    <p>Intern Management System</p>
  </div>

  <div className="summary-card">
    <h2>Total Interns</h2>
    <span>{students.length}</span>
  </div>

  <div className="search-box">
    <input
      type="text"
      placeholder="Search Intern..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="table-card">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>College</th>
          <th>Degree</th>
          <th>Branch</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {filteredStudents.map((student) => (
          <tr key={student.intern_id}>
            <td>{student.intern_id}</td>
            <td>{student.full_name}</td>
            <td>{student.email}</td>
            <td>{student.college_name}</td>
            <td>{student.degree}</td>
            <td>{student.branch}</td>

            <td>
              <button
                className="status"
                onClick={() => openDashboard(student)}
              >
                {student.status}
              </button>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  </div>

</div>


);
}

export default StudentList;
