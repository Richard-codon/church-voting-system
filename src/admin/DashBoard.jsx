// DashBoard.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashBoard = () => {
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
              <a href="/admin/manage-elections" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                Go to Elections
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">View Results</h2>
              <p className="mt-2 text-gray-600">Check the real-time voting results.</p>
              <a href="/admin/results" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                Go to Results
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashBoard;
