import  { useState } from "react";

const DashBoard = () => {
  const [polls, setPolls] = useState(() => {
    return JSON.parse(localStorage.getItem("polls")) || [];
  });
  const [pollTitle, setPollTitle] = useState("");
  const [contestants, setContestants] = useState([]);
  const [contestantName, setContestantName] = useState("");

  const handleAddContestant = () => {
    if (contestantName.trim() === "") return;
    setContestants([...contestants, { name: contestantName }]);
    setContestantName("");
  };

  const handleSubmitPoll = () => {
    if (!pollTitle || contestants.length === 0) return alert("Fill all fields!");
    const newPoll = { title: pollTitle, contestants };
    const updatedPolls = [...polls, newPoll];
    setPolls(updatedPolls);
    localStorage.setItem("polls", JSON.stringify(updatedPolls));
    setPollTitle("");
    setContestants([]);
    alert("Poll created successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create a Poll</h2>
      <input
        type="text"
        value={pollTitle}
        onChange={(e) => setPollTitle(e.target.value)}
        placeholder="Poll Title"
        className="border rounded p-2 w-full mb-4"
      />
      <div className="mb-4">
        <input
          type="text"
          value={contestantName}
          onChange={(e) => setContestantName(e.target.value)}
          placeholder="Contestant Name"
          className="border rounded p-2 w-2/3"
        />
        <button
          onClick={handleAddContestant}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Contestant
        </button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Contestants:</h3>
        <ul>
          {contestants.map((contestant, index) => (
            <li key={index} className="text-gray-700">
              {contestant.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleSubmitPoll}
        className="bg-green-500 text-white px-6 py-2 rounded"
      >
        Submit Poll
      </button>
    </div>
  );
};

export default DashBoard;
