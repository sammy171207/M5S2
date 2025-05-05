import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`https://student-82718-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`);
      const data = await response.json();
      setNote({ title: data.title, content: data.content });
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://student-82718-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(note),
    });

    if (response.ok) {
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
        Update Note
      </button>
    </form>
  );
}

export default UpdateNote;
