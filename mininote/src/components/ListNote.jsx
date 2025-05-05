import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListNote() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("https://student-82718-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json");
      const data = await response.json();
      const notesArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
      setNotes(notesArray);
    };
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`https://student-82718-default-rtdb.asia-southeast1.firebasedatabase.app/notes/${id}.json`, {
      method: "DELETE",
    });
    if (response.ok) {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="p-4 space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <div>
            <Link to={`/update/${note.id}`} className="button">Update</Link>
            <button onClick={() => handleDelete(note.id)} className="button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListNote;
