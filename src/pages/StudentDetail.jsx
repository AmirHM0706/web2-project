import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/students/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error("Error fetching student:", err));
  }, [id]);

  if (!student) return <p>در حال بارگذاری...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{student.name}</h2>
      <img src={student.photo} alt={student.name} style={{ width: "200px" }} />
      <p>{student.description}</p>
    </div>
  );
};

export default StudentDetail;
