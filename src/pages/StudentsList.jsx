import React, { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import "./StudentsList.css";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("خطا در دریافت لیست:", err));
  }, []);

  const handleAddClick = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleEdit = (id) => {
    const student = students.find(s => s.id === id);
    if (student) {
      setEditingStudent(student);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/students/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          setStudents(prev => prev.filter(s => s.id !== id));
        } else {
          throw new Error("خطا در حذف دانشجو");
        }
      })
      .catch(err => console.error("Error deleting student:", err));
  };

  const handleSave = (student) => {
    if (editingStudent) {
      // ویرایش دانشجو
      fetch(`http://localhost:3001/students/${student.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then(res => res.json())
        .then(updatedStudent => {
          setStudents(prev =>
            prev.map(s => (s.id === updatedStudent.id ? updatedStudent : s))
          );
          setShowForm(false);
          setEditingStudent(null);
        })
        .catch(err => console.error("Error updating student:", err));
    } else {
      // اضافه کردن دانشجو جدید
      fetch("http://localhost:3001/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      })
        .then(res => res.json())
        .then(newStudent => {
          setStudents(prev => [...prev, newStudent]);
          setShowForm(false);
          setEditingStudent(null);
        })
        .catch(err => console.error("Error adding student:", err));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  return (
    <div className="students-list-container" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "1rem" }}>
      <Header />
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>لیست دانشجویان</h2>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button className="primary-btn" onClick={handleAddClick}>افزودن دانشجوی جدید</button>
      </div>

      {showForm && (
        <StudentForm
          studentToEdit={editingStudent}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <div className="cards-container">
        {students.length > 0 ? (
          students.map(student => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>هیچ دانشجویی یافت نشد.</p>
        )}
      </div>
    </div>
  );
};

export default StudentsList;
