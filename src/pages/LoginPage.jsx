import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/nutfs_logo.jpg";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showForgotMessage, setShowForgotMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin@example.com" && password === "password") {
      navigate("/admin");
    } else if (username === "voter@example.com" && password === "voterpassword") {
      navigate("/voting");
    } else {
      setError("Invalid login credentials.");
    }
  };

  return (
    <motion.div
      className="h-[calc(100vh-128px)] w-full flex items-center justify-center text-sm sm:text-base bg-white overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-sm px-4">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="NUTFS Logo" className="h-14 w-auto mb-2" />
          <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
        </div>

        {error && (
          <motion.p
            className="text-red-500 text-sm mb-2 text-center"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              className="w-full pl-9 p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#722f37]"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full pl-9 pr-9 p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#722f37]"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-blue-600"
              />
              <span>Remember Me</span>
            </label>
            <button
              type="button"
              onClick={() => setShowForgotMessage(!showForgotMessage)}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {showForgotMessage && (
            <p className="text-xs text-gray-600 pl-1">
              Kindly reach out to the E.C team.
            </p>
          )}

          <motion.button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:animate-pulse transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
