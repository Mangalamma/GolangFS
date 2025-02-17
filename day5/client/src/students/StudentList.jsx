import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from 'axios';
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true); // To manage the loading state
    const [error, setError] = useState(''); // To handle any errors

    // Fetch all students
    const readAllStudents = async () => {
        try {
            const baseUrl = 'http://localhost:8080'; // Ensure your backend URL is correct
            const response = await axios.get(`${baseUrl}/students`);
            const queriedStudents = response.data;
            setStudents(queriedStudents);
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            setLoading(false);
            setError('Failed to load students. Please try again later.');
        }
    };

    // Delete a student by ID
    const deleteStudent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this student?")) {
            return;
        }
        const baseUrl = "http://localhost:8080";
        try {
            const response = await axios.delete(`${baseUrl}/students/${id}`);
            alert(response.data.message);
            await readAllStudents(); // Refresh the list after deletion
        } catch (error) {
            alert('Failed to delete the student.');
        }
    };

    // Fetch students on component mount
    useEffect(() => {
        readAllStudents();
    }, []);

    return (
        <>
            <PageHeader />
            <h3>List of Students</h3>


            {/* Display loading message or error message */}
            {loading && <div>Loading students...</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Container with background image */}
            <div className="container">
                <table className="table table-warning table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <th scope="row">{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.department}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <a href={`/students/view/${student.id}`} className="btn btn-success">View</a>
                                        &nbsp;
                                        <a href={`/students/edit/${student.id}`} className="btn btn-warning">Edit</a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5">No students found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ContactForm />
            <Footer />
        </>
    );
}

export default StudentList;
