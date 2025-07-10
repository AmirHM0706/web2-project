import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data))
      .catch(err => console.error("خطا در دریافت اطلاعات:", err));
  }, [id]);

  if (!student) return <p>در حال بارگذاری...</p>;

  return (
    <div style={{ padding: "2rem", direction: "rtl", textAlign: "right" }}>
      <Link to="/students" style={{ textDecoration: "none", color: "#1976d2" }}>
        ← بازگشت به لیست دانشجویان
      </Link>
      <h2>{student.name}</h2>
      <img src={student.photo} alt={student.name} style={{ maxWidth: "300px", borderRadius: "16px" }} />
      <p>{student.description}</p>
    </div>
  );
};

export default StudentDetails;
