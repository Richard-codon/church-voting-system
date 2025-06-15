import { useEffect, useState } from "react";
import { FaCheckCircle, FaArrowDown } from "react-icons/fa";

import bg1 from "../assets/hpic/bg1.jpeg";
import bg2 from "../assets/hpic/bg2.jpeg";
import bg3 from "../assets/hpic/bg3.jpeg";
import bg4 from "../assets/hpic/bg4.jpeg";
import bg5 from "../assets/hpic/bg5.jpeg";
import bg6 from "../assets/hpic/bg6.jpeg";
import bg7 from "../assets/hpic/bg7.jpeg";
import bg8 from "../assets/hpic/bg8.jpeg";
import bg9 from "../assets/hpic/bg9.jpeg";
import bg10 from "../assets/hpic/bg10.jpeg";
import bg11 from "../assets/hpic/bg11.jpeg";

const HomePage = () => {
  const slideshowImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      {/* Slideshow */}
      <div className="relative w-full overflow-hidden">
        <div className="w-screen h-80 md:h-[28rem]">
          <img
            src={slideshowImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            key={currentImage}
          />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="-mt-24 px-4 md:px-12 z-10 relative w-full">
  <div className="bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-gray-200 rounded-2xl p-8 md:p-16 max-w-5xl mx-auto text-center">
    
    {/* Hello there! 👋 — One line */}
    <div className="flex justify-center items-center gap-3 mb-3 whitespace-nowrap">
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
    Hello there!
  </h1>
  <span className="text-3xl animate-bounce">👋</span>
</div>


    {/* Welcome Line */}
    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
      Welcome to the N.U.T.F.S Voting Application.
    </h2>

    {/* Description */}
    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
      Your voice matters! Kindly read the following instructions and click on login to participate in elections or manage them as an admin.
    </p>
  </div>
</div>


      {/* Main Content */}
      <main className="p-6 md:p-12 w-full max-w-5xl mx-auto text-gray-900 flex-grow">
        {/* About Section */}
        <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg shadow-md p-8 text-center mb-12 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About This System</h2>
          <p className="text-gray-800 max-w-xl mx-auto leading-relaxed">
            This digital platform empowers N.U.T.F.S members to vote securely and transparently from anywhere. Whether you're voting on leadership, decisions, or community matters — your voice counts.
          </p>
        </section>

        {/* How It Works */}
        <section className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How the System Works</h2>
          <ol className="list-decimal list-inside space-y-6 text-gray-800 max-w-3xl mx-auto">
            {[
              { title: "Click on “Login”", description: "Begin by clicking the Login button on the homepage to access the voting system." },
              { title: "Enter Your Credentials", description: "Log in using the email address and password provided to you by the church administration." },
              { title: "Access the Voting Page", description: "Once logged in, you’ll be directed to the voting page listing candidates for each leadership role." },
              { title: "Make Your Selections", description: "Carefully review and choose the individuals you believe are best suited for each position. One vote per role." },
              { title: "Submit Your Votes", description: "After making your selections, click on Submit to finalize your vote. Your choices will be securely recorded." },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <FaCheckCircle style={{ color: "#059669" }} size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <strong>{item.title}</strong>
                  <p className="mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-yellow-700 italic mt-8 text-center max-w-md mx-auto">
            ⚠️ Please review your selections before submitting, as votes cannot be changed once submitted.
          </p>
        </section>

        {/* Login Button */}
        <section className="text-center mb-12 flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-semibold mb-0">Ready?</h3>
          <FaArrowDown size={20} className="text-blue-600 animate-bounce" />
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition font-semibold hover:animate-pulse"
          >
            Login
          </a>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
