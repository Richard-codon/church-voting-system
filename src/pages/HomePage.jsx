import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Church Voting System</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your voice matters! Login to participate in elections or manage them as an admin.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {/* Login Button */}
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Login
          </a>
          
          {/* Sign Up Button */}
          <a
            href="/signup"
            className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
          >
            Sign Up
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
