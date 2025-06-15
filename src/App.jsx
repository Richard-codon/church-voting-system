// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import VotingPage from "./pages/VotingPage";
import DashBoard from "./admin/DashBoard";
import ThankYouPage from "./voter/ThankYouPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// Wrapper to handle layout and overflow for all pages
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isThankYouPage = location.pathname === "/thankyou";

  useEffect(() => {
    // Disable scroll only on thank you page
    document.body.style.overflow = isThankYouPage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isThankYouPage]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header
        className={`w-full z-50 bg-white shadow-md ${
          isThankYouPage ? "fixed top-0" : "sticky top-0"
        }`}
      >
        <Header />
      </header>

      {/* Main content */}
      <main
        className={`flex-grow w-full px-4 py-4 ${
          isThankYouPage ? "mt-16 mb-16 overflow-hidden" : ""
        }`}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        className={`w-full bg-gray-100 ${
          isThankYouPage ? "fixed bottom-0" : "relative"
        }`}
      >
        <Footer />
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <HomePage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/login"
          element={
            <LayoutWrapper>
              <LoginPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <LayoutWrapper>
              <SignUpPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <LayoutWrapper>
              <DashBoard />
            </LayoutWrapper>
          }
        />
        <Route
          path="/voting"
          element={
            <LayoutWrapper>
              <VotingPage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/thankyou"
          element={
            <LayoutWrapper>
              <ThankYouPage />
            </LayoutWrapper>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
