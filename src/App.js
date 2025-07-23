import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
        <span className="text-2xl font-bold text-indigo-700">BCI UGA</span>
        <div className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-indigo-700">About</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-700">Projects</a>
          <a href="#join" className="text-gray-700 hover:text-indigo-700">Join</a>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">
          Brain-Computer Interface Research at UGA
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Sparking innovation in neurotechnology.
          We’re an undergraduate-led initiative building the foundation for BCI research at the University of Georgia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="about">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              We aim to establish a vibrant BCI research community at UGA—facilitating projects, writing grant proposals, and enabling collaboration between students and faculty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" id="projects">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Current Projects</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>EEG data analysis & open-source datasets</li>
              <li>Brain signal processing & visualization</li>
              <li>White paper & grant writing</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 bg-white p-6 rounded-2xl shadow" id="join">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Join Us</h2>
          <p className="text-gray-600 mb-2">
            Interested in neurotech, CS, cognitive science, or just want to help out?
            <br />
            <span className="font-semibold">Contact:</span> <a href="mailto:zcb94880@uga.edu" className="text-indigo-600 underline">zcb94880@uga.edu</a>
          </p>
          <a
            href="https://t.me/yourtelegram" // put your real link!
            className="inline-block mt-2 bg-indigo-700 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-800 transition"
            target="_blank" rel="noopener noreferrer"
          >
            Join our Telegram
          </a>
        </div>
      </main>
      <footer className="text-center text-sm text-gray-500 my-8">
        © {new Date().getFullYear()} BCI Research Organization at UGA
      </footer>
    </div>
  );
}

export default App;

