import React from "react";

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="student-card">
      <img src={student.photo} alt={student.name} />
      <h4>{student.name}</h4>
      <p>{student.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <button className="edit-btn" onClick={() => onEdit(student.id)}>ویرایش</button>
        <button className="delete-btn" onClick={() => onDelete(student.id)}>حذف</button>
      </div>
    </div>
  );
};

export default StudentCard;
