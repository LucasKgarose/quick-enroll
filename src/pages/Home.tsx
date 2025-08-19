// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-center bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to{" "}
        <span className="text-blue-600">QuickEnroll</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Submit your child's school application quickly and securely online.
        <br />
        <span className="text-blue-500 font-medium">QuickEnroll</span> makes the
        enrollment process easy, transparent, and accessible.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <Link to="/register">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded shadow transition">
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button className="border border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-3 rounded shadow transition">
            Login
          </button>
        </Link>
      </div>

      <section className="mt-12 text-left bg-gray-50 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          How it works
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Create an account or log in</li>
          <li>Complete your child's application form</li>
          <li>Submit and track application status online</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
