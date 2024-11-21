// VotingPage.jsx
import { useState, useEffect } from 'react';

const VotingPage = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    // Fetch polls from localStorage (or from a backend later)
    const savedPolls = JSON.parse(localStorage.getItem('polls')) || [];
    setPolls(savedPolls);
  }, []);

  const handleVote = (pollIndex, optionIndex) => {
    const selectedPoll = polls[pollIndex];
    alert(`You voted for "${selectedPoll.options[optionIndex]}" in the "${selectedPoll.title}" poll`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800">Vote in Elections</h2>
      {polls.length === 0 ? (
        <p className="mt-4 text-lg text-gray-600">No active polls available.</p>
      ) : (
        polls.map((poll, pollIndex) => (
          <div key={pollIndex} className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">{poll.title}</h3>
            <div className="mt-2">
              {poll.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleVote(pollIndex, optionIndex)}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-2 inline-block"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VotingPage;
