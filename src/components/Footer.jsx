import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold">Kamla Portfolio</h2>
            <p className="text-gray-400">© 2025 All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/kamla23"
              className="hover:text-blue-400 transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/kamla-fuleshri-44665330a/"
              className="hover:text-blue-400 transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://twitter.com/yourtwitter"
              className="hover:text-blue-400 transition"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
