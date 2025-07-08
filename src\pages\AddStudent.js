import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="container">
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
```

This is a basic React application with a navigation bar, home page, students page, and add student page. The students page displays a list of students, and the add student page allows you to add a new student. The application uses Bootstrap for styling and React Router for client-side routing.