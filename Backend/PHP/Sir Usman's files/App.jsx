import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState([]);

  // Fetch data
  const loadData = async () => {
    const res = await fetch("http://localhost/learning/fetch.php");
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Insert
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost/learning/insert.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    setName("");
    setEmail("");
    loadData();
  };

  // Delete
  const handleDelete = async (id) => {
    await fetch("http://localhost/learning/delete.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadData();
  };

  // Update (simple prompt)
  const handleUpdate = async (id) => {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");

    await fetch("http://localhost/learning/update.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name: newName, email: newEmail }),
    });

    loadData();
  };

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>

      <hr />

      <h2>Students List</h2>

      {students.map((s) => (
        <div key={s.id}>
          {s.name} - {s.email}
          <button onClick={() => handleDelete(s.id)}>Delete</button>
          <button onClick={() => handleUpdate(s.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default App;