import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

// Import candidate images directly
import in1 from "../assets/incomingexe/in1.png";
import in2 from "../assets/incomingexe/in2.png";
import in3 from "../assets/incomingexe/in3.png";
import in4 from "../assets/incomingexe/in4.png";
import in5 from "../assets/incomingexe/in5.png";

// Candidate image array
const candidateImages = [in1, in2, in3, in4, in5];

// Position titles
const positions = [
  "President",
  "Vice President",
  "General Secretary",
  "Organizer",
  "Treasurer",
  "Women’s Commissioner",
  "Female Organizer",
  "Financial Secretary",
  "Deputy General Secretary",
  "Deputy Male Organizer",
];

// Current executive data
import imgPresi from "../assets/currentexecutives/presi.jpeg";
import imgVp from "../assets/currentexecutives/vp.jpeg";
import imgGenSec from "../assets/currentexecutives/gensec.jpeg";
import imgOrganizer from "../assets/currentexecutives/organizer.jpeg";
import imgDeputyMaleOrg from "../assets/currentexecutives/deputymaleorg.jpeg";
import imgTreasurer from "../assets/currentexecutives/treasurer.jpeg";
import imgWoCom from "../assets/currentexecutives/wocom.jpeg";
import imgFemaleOrg from "../assets/currentexecutives/femaleorg.jpeg";
import imgFinanSec from "../assets/currentexecutives/finansec.jpeg";
import imgDepGenSec from "../assets/currentexecutives/depgensec.jpeg";

const executives = [
  { role: "President", name: "Kwabena Andrews Jnr.", image: imgPresi },
  { role: "Vice President", name: "Daniel Anokye", image: imgVp },
  { role: "General Secretary", name: "Twumasi Frimpong Bernard", image: imgGenSec },
  { role: "Organizer", name: "Samuel Opare-Ansah", image: imgOrganizer },
  { role: "Deputy Male Organizer", name: "Obiri Yeboah Samuel", image: imgDeputyMaleOrg },
  { role: "Treasurer", name: "Osaabanin", image: imgTreasurer },
  { role: "Women’s Commissioner", name: "Afia Kyeiwaa Boateng", image: imgWoCom },
  { role: "Female Organizer", name: "Augustina Adowaa Donkor", image: imgFemaleOrg },
  { role: "Financial Secretary", name: "Asante Kwarteng Grace", image: imgFinanSec },
  { role: "Deputy General Secretary", name: "Appiah Lordia Tima", image: imgDepGenSec },
];

// Custom carousel arrows
const ArrowLeft = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 text-gray-700 rounded-full shadow cursor-pointer z-10 items-center justify-center"
    onClick={onClick}
  >
    &#8592;
  </div>
);

const ArrowRight = ({ onClick }) => (
  <div
    className="hidden sm:flex absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 text-gray-700 rounded-full shadow cursor-pointer z-10 items-center justify-center"
    onClick={onClick}
  >
    &#8594;
  </div>
);

const VotingPage = () => {
  const [votes, setVotes] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("votes"));
    if (savedVotes) setVotes(savedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (position, index) => {
    setVotes((prev) => ({ ...prev, [position]: index }));
  };

  const handleConfirm = () => {
    const allVoted = positions.every((pos) => typeof votes[pos] !== "undefined");
    if (!allVoted) {
      setError(true);
      setConfirmationText("Please vote for all positions before confirming.");
      setSubmitted(true);
      return;
    }

    const result = Object.entries(votes)
      .map(([position, index]) => `${position}: Candidate ${index + 1}`)
      .join("\n");

    setConfirmationText(result);
    setError(false);
    setSubmitted(true);
  };

  const handleFinalSubmit = () => {
    navigate("/thankyou");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    draggable: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-gray-50 text-sm sm:text-base"
    >
      <main className="flex-grow pt-20 px-4 sm:px-6 max-w-screen-xl mx-auto w-full">
        <section className="mb-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome to the Voting Page</h1>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Carefully review each candidate and cast your vote. Make your voice heard in shaping the future leadership of N.U.T.F.S. (K.N.U.S.T.)
          </p>
        </section>

        {/* Executives */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Current Executives</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow p-4 text-center"
              >
                <img src={exec.image} alt={exec.role} className="w-24 h-24 mx-auto object-cover rounded-full mb-2" />
                <h4 className="text-sm font-semibold">{exec.role}</h4>
                <p className="text-xs text-gray-600">{exec.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Voting Section */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Cast Your Vote For The Incoming Executives</h2>
          {positions.map((position) => (
            <div key={position} className="mb-10">
              <h3 className="text-sm sm:text-base font-semibold mb-1 text-center text-gray-700">{position}</h3>
              <p className="text-center text-xs text-gray-500 mb-3">Swipe to view more candidates</p>
              <div className="relative">
                <Slider {...sliderSettings}>
                  {candidateImages.map((img, idx) => (
                    <div key={idx} className="px-3">
                      <div className={`bg-white p-4 rounded-xl shadow transition hover:scale-[1.02] ${votes[position] === idx ? "ring-4 ring-green-400" : ""}`}>
                        <img src={img} alt={`Candidate ${idx + 1}`} className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover" />
                        <p className="mt-2 text-center text-sm text-gray-600">Candidate {idx + 1}</p>
                        <button
                          onClick={() => handleVote(position, idx)}
                          className={`mt-4 w-full py-2 rounded text-xs sm:text-sm ${votes[position] === idx ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                        >
                          {votes[position] === idx ? "Voted" : "Vote"}
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          ))}

          {/* Confirm & Submit */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleConfirm}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded text-sm sm:text-base transition"
            >
              <FaCheckCircle /> Review Votes
            </button>
          </div>

          {submitted && (
            <div className={`mt-6 max-w-2xl mx-auto p-4 rounded shadow-sm border ${error ? "bg-red-100 border-red-400 text-red-700" : "bg-green-100 border-green-400 text-green-700"}`}>
              <h3 className="font-semibold mb-2">
                {error ? "Incomplete Voting Detected" : "Thank you for reviewing your votes!"}
              </h3>
              <pre className="text-sm whitespace-pre-wrap">{confirmationText}</pre>
            </div>
          )}

          {!error && submitted && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleFinalSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded text-sm sm:text-base transition"
              >
                <FaPaperPlane /> Submit Votes
              </button>
            </div>
          )}
        </section>
      </main>
    </motion.div>
  );
};

export default VotingPage;
