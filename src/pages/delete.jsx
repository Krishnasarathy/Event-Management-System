import { useState, useEffect } from 'react';





const TableDel = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetchApplicants();
    }, []);

    const fetchApplicants = () => {
        applicationList()
            .then(response => {
                setApplicants(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    };

    const handleDeleteUser = (applicationId) => {
        instance.delete()
            .then(response => {
                console.log(response.data.data);
                fetchApplicants();
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <div>
            <Header />
            <div className="containersss">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Experience</th>
                            <th>Skills</th>
                            <th>Resume</th>
                            <th>Actions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map((applicant) => (
                            <tr key={applicant.applicationId}>
                                <td>{applicant.applicationId}</td>
                                <td>{applicant.applicantName}</td>
                                <td>{applicant.applicantEmail}</td>
                                <td>{applicant.applicantContact}</td>
                                <td>{applicant.workExperience}</td>
                                <td>{applicant.applicantSkills}</td>
                                <td>
                                    <a href={applicant.resumePath} target="_blank" rel="noopener noreferrer" className="link">View Resume</a>
                                </td>
                                <td>
                                    <button className="actions-btn select-btn">Select</button>
                                </td>
                                <td>
                                    <button className="actions-btn reject-btn" onClick={() => handleDeleteUser(applicant.applicationId)}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableDel;