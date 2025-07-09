import React, { useState, useEffect } from "react";

const StudentForm = ({ studentToEdit, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setPhoto(studentToEdit.photo);
      setDescription(studentToEdit.description);
    } else {
      setName("");
      setPhoto("");
      setDescription("");
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !photo) {
      alert("لطفا نام و عکس را وارد کنید");
      return;
    }
    if (studentToEdit) {
      onSave({
        id: studentToEdit.id,
        name,
        photo,
        description,
      });
    } else {
      onSave({
        name,
        photo,
        description,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>نام:</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>آدرس عکس:</label>
        <input value={photo} onChange={e => setPhoto(e.target.value)} />
      </div>
      <div>
        <label>توضیحات:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <button type="submit" className="primary">ذخیره</button>
      <button type="button" onClick={onCancel} className="cancel">انصراف</button>
    </form>
  );
};

export default StudentForm;
