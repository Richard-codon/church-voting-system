// DashBoard.jsx
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashBoard = () => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);

  const handlePollTitleChange = (e) => setPollTitle(e.target.value);

  const handlePollOptionChange = (index, e) => {
    const newOptions = [...pollOptions];
    newOptions[index] = e.target.value;
    setPollOptions(newOptions);
  };

  const handleSubmitPoll = () => {
    const newPoll = { title: pollTitle, options: pollOptions };
    // Store the poll (in localStorage for now)
    const existingPolls = JSON.parse(localStorage.getItem("polls")) || [];
    localStorage.setItem("polls", JSON.stringify([...existingPolls, newPoll]));
    setPollTitle("");
    setPollOptions(["", ""]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Manage Elections</h2>
              <p className="mt-2 text-gray-600">Create, edit, or delete elections.</p>
              <a
                href="/admin/manage-elections"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Go to Elections
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">View Results</h2>
              <p className="mt-2 text-gray-600">Check the real-time voting results.</p>
              <a
                href="/admin/results"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                Go to Results
              </a>
            </div>
          </div>

          {/* Create Election Form */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">Create Election Poll</h3>
            <form>
              <div>
                <label className="block text-gray-600">Poll Title</label>
                <input
                  type="text"
                  value={pollTitle}
                  onChange={handlePollTitleChange}
                  className="mt-2 p-2 w-full border rounded"
                  placeholder="Enter election title"
                  required
                />
              </div>

              {pollOptions.map((option, index) => (
                <div key={index} className="mt-4">
                  <label className="block text-gray-600">Option {index + 1}</label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handlePollOptionChange(index, e)}
                    className="mt-2 p-2 w-full border rounded"
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                </div>
              ))}

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleSubmitPoll}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                >
                  Create Poll
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashBoard;
