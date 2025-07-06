// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>📱 Welcome to Promise Pulse</h1>
      <p>
        Track your local leaders' promises, raise concerns, and vote on whether they’re keeping their word.
      </p>
      <p>Empowering citizens through transparency and accountability 💪</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
  }
};

export default Home;
