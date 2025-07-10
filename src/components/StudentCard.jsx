import React from "react";
import { useNavigate } from "react-router-dom";
import "./StudentCard.css"; // 👈 اضافه کن

const StudentCard = ({ student, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/students/${student.id}`);
  };

  return (
    <div className="student-card" onClick={handleClick}>
      <img src={student.photo} alt={student.name} />
      <h4>{student.name}</h4>
      <p>{student.description}</p>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <button
          className="edit-btn"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(student.id);
          }}
        >
          ویرایش
        </button>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(student.id);
          }}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
