// src/pages/Promises.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Promises = () => {
  const [promises, setPromises] = useState([]);

  useEffect(() => {
    const fetchPromises = async () => {
      const snapshot = await getDocs(collection(db, 'promises'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPromises(data);
    };
    fetchPromises();
  }, []);

  return (
    <div style={styles.container}>
      <h2>📜 Promises</h2>
      {promises.length === 0 ? (
        <p>No promises found.</p>
      ) : (
        promises.map(p => (
          <div key={p.id} style={styles.card}>
            <h3>{p.title}</h3>
            <p><strong>Status:</strong> {p.status}</p>
            <p><strong>Constituency:</strong> {p.constituency}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9'
  }
};

export default Promises;
