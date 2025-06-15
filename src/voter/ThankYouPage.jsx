// src/voter/ThankYouPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ThankYouPage = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] text-gray-800 bg-gradient-to-br from-[#fdfdfd] to-[#f3f3f3] text-center">
      <Confetti width={width} height={height} numberOfPieces={150} recycle={false} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full px-4"
      >
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          Your vote has been successfully recorded. We appreciate your
          participation in shaping the future leadership of <b>N.U.T.F.S.(K.N.U.S.T)</b>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
          >
          <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)" }}
  whileTap={{ scale: 0.95 }}
  className="bg-blue-600 text-white px-6 py-2 rounded-md transition"
>
  Back to Home
</motion.button>

          </Link>
          <Link
            to="/login"
            className="text-gray-700 underline text-sm sm:text-base hover:text-gray-900"
          >
            Log out
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
