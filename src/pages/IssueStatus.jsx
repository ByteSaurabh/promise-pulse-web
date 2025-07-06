// src/pages/IssueStatus.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const IssueStatus = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'issues'));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setIssues(data);
    };
    fetch();
  }, []);

  const calculateDays = (createdAt, resolvedAt) => {
    if (!resolvedAt) return '⏳ Still Active';
    const start = createdAt.toDate();
    const end = resolvedAt.toDate();
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return `✅ Resolved in ${days} days`;
  };

  return (
    <div style={styles.container}>
      <h2>📈 Issue Status</h2>
      {issues.map(issue => (
        <div key={issue.id} style={styles.card}>
          <p><strong>Description:</strong> {issue.description}</p>
          <p><strong>Location:</strong> {issue.location}</p>
          <p><strong>Status:</strong> {issue.status}</p>
          <p>{issue.status === 'resolved'
              ? calculateDays(issue.createdAt, issue.resolvedAt)
              : '⏳ Awaiting resolution...'}</p>
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
  }
};

export default IssueStatus;
