// src/pages/Login.jsx
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('✅ Logged in');
    } catch (error) {
      console.error(error);
      alert('❌ Login failed');
    }
  };

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Login with Google</h2>
      <button
        onClick={handleLogin}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-800"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
