import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://student-82718-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(note),
    });
    
    if (response.ok) {
      setNote({ title: "", content: "" });
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <label className="block text-lg">Title</label>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        className="input"
      />
      <label className="block text-lg">Content</label>
      <input
        type="text"
        name="content"
        value={note.content}
        onChange={handleChange}
        className="input"
      />
      <button type="submit" className="button">
        Add Note
      </button>
    </form>
  );
}

export default AddNote;
