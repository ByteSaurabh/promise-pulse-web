// src/pages/RaiseIssue.jsx
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

const RaiseIssue = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !location) return alert('Fill all fields');

    await addDoc(collection(db, 'issues'), {
      description,
      location,
      status: 'active',
      createdAt: Timestamp.now(),
      resolvedAt: null
    });
    alert('🚀 Issue submitted');
    setDescription('');
    setLocation('');
  };

  return (
    <div style={styles.container}>
      <h2>📍 Raise an Issue</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the issue" style={styles.input} />
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Your locality" style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #aaa' },
  button: { padding: '10px', backgroundColor: '#00cc99', border: 'none', color: 'white', borderRadius: '6px' }
};

export default RaiseIssue;
