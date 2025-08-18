import React,{useState} from "react";
import Magnet from "../Animate/Magnet";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto p-6 flex items-center justify-between">
        <Magnet>
          <a
            href="#hero"
            className="font-extrabold text-xl tracking-tight"
            data-aos="fade-right"
          >
            Joshua<span className="text-indigo-600">.</span>
          </a>
        </Magnet>

        <nav className="hidden md:flex gap-6 items-center" data-aos="fade-left">
          <a href="#projects" className="hover:underline cursor-target">
            Projects
          </a>
          <a href="#about" className="hover:underline cursor-target">
            About
          </a>
          <a href="#contact" className="hover:underline cursor-target">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md border"
          onClick={() => setOpen((s) => !s)}
          aria-label="Open menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </header>

      {open && (
        <div className="md:hidden container mx-auto px-6 pb-4">
          <nav className="flex flex-col gap-3">
            <a href="#projects" className="block">
              Projects
            </a>
            <a href="#about" className="block">
              About
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
