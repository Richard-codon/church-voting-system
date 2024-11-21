import  { useEffect, useState } from "react";

const VotingPage = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const savedPolls = JSON.parse(localStorage.getItem("polls")) || [];
    setPolls(savedPolls);
  }, []);

  const handleVote = (pollIndex, contestantIndex) => {
    alert(`You voted for ${polls[pollIndex].contestants[contestantIndex].name}!`);
    // Additional voting logic (e.g., save vote count) can be implemented here.
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Voting Page</h2>
      {polls.length === 0 ? (
        <p className="text-gray-600">No active polls available.</p>
      ) : (
        polls.map((poll, pollIndex) => (
          <div key={pollIndex} className="mb-6 p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{poll.title}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {poll.contestants.map((contestant, contestantIndex) => (
                <div
                  key={contestantIndex}
                  className="border p-4 rounded shadow hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold">{contestant.name}</h4>
                  <button
                    onClick={() => handleVote(pollIndex, contestantIndex)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Vote
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VotingPage;
