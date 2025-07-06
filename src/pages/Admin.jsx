// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, Timestamp } from 'firebase/firestore';

const Admin = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDocs(collection(db, 'issues'));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setIssues(data);
    };
    fetch();
  }, []);

  const resolveIssue = async (id) => {
    await updateDoc(doc(db, 'issues', id), {
      status: 'resolved',
      resolvedAt: Timestamp.now()
    });
    alert('✅ Issue marked resolved!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛠 Admin Dashboard</h2>
      {issues.map(issue => (
        <div key={issue.id} className="border p-4 rounded mb-3 bg-gray-100">
          <p><strong>{issue.description}</strong></p>
          <p>📍 {issue.location}</p>
          <p>Status: {issue.status}</p>
          {issue.status !== 'resolved' && (
            <button
              onClick={() => resolveIssue(issue.id)}
              className="mt-2 px-4 py-1 bg-green-600 text-white rounded"
            >
              ✅ Mark as Resolved
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Admin;
