// src/pages/Vote.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';

const Vote = () => {
  const [promises, setPromises] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'promises'));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPromises(data);
    };
    fetch();
  }, []);

  const handleVote = async (id, isFulfilled) => {
    const ref = doc(db, 'promises', id);
    await updateDoc(ref, {
      votes_total: increment(1),
      votes_fulfilled: increment(isFulfilled ? 1 : 0),
      votes_not_fulfilled: increment(!isFulfilled ? 1 : 0)
    });
    alert('✅ Vote recorded');
  };

  return (
    <div style={styles.container}>
      <h2>🗳️ Vote on Promises</h2>
      {promises.map(p => (
        <div key={p.id} style={styles.card}>
          <h3>{p.title}</h3>
          <p><strong>Constituency:</strong> {p.constituency}</p>
          <button onClick={() => handleVote(p.id, true)} style={styles.btn}>✅ Fulfilled</button>
          <button onClick={() => handleVote(p.id, false)} style={styles.btnRed}>❌ Not Fulfilled</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem'
  },
  btn: {
    marginRight: '10px',
    padding: '6px 12px',
    backgroundColor: '#00cc66',
    color: 'white',
    border: 'none',
    borderRadius: '6px'
  },
  btnRed: {
    padding: '6px 12px',
    backgroundColor: '#cc0033',
    color: 'white',
    border: 'none',
    borderRadius: '6px'
  }
};

export default Vote;
