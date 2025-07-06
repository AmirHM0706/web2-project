import React from "react";

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div style={{
      border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", margin: "0.5rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)", width: "200px"
    }}>
      <img src={student.photo} alt={student.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{student.name}</h3>
      <p>{student.description}</p>
      <button onClick={() => onEdit(student.id)}>ویرایش</button>
      <button onClick={() => onDelete(student.id)} style={{ marginLeft: "0.5rem" }}>حذف</button>
    </div>
  );
};

export default StudentCard;
