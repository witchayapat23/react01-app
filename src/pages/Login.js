import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { useState } from "react";
import axios from "axios";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      login(res.data.token);
      alert('Login Successful!');
      navigate('/');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Login failed');
      console.error(err.response ? err.response.data : err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ยังไม่มีบัญชี? <Link to="/register" className="text-blue-600 hover:underline">สมัครสมาชิก</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
