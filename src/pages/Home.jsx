import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";

const sampleStudents = [
  {
    id: 1,
    name: "امیر محمد",
    photo: "https://via.placeholder.com/150",
    description: "دانشجوی نمونه در درس وب ۲"
  },
  {
    id: 2,
    name: "فاطمه حسینی",
    photo: "https://via.placeholder.com/150",
    description: "دانشجوی فعال"
  }
];

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // TODO: جای بارگذاری داده‌ها از سرور بزاری
    setStudents(sampleStudents);
  }, []);

  const handleEdit = (id) => {
    alert("ویرایش دانشجو با id: " + id);
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div>
      <Header />
      <section style={{ padding: "1rem" }}>
        <h2>معرفی درس وب ۲</h2>
        <p>این درس به مباحث پیشرفته وب و توسعه فرانت‌اند اختصاص دارد.</p>
        <h3>معرفی استاد: دکتر علی رضایی</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {students.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
