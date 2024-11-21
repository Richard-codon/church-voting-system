// SignUpPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (email && password) {
      // Save the user data to localStorage (simulating user registration)
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/login"); // Redirect to login page after successful sign up
    } else {
      setError("Please provide both email and password.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-semibold text-gray-800">Sign Up</h1>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <form className="mt-6" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
