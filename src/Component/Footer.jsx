import React from "react";

function Footer() {
  return (
    <footer className="border-t dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Joshua STILL IN DEVELOPMENT
        </p>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a
            href="https://github.com/JoshNells13"
            target="blank"
            className="text-sm cursor-target"
          >
            GitHub
          </a>
          <a href="#" className="text-sm cursor-target">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
