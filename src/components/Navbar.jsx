import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Inventory", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-heading tracking-wide">AUTORAVE</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-body text-sm">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-red-500 transition cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block font-body bg-white text-black transition px-5 py-2 rounded-xl text-sm">
          Book a Test Drive
        </button>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="md:hidden bg-black text-white h-screen px-6 pb-6 space-y-4 font-general"
          >
            {navLinks.map((link) => (
              <li
                key={link}
                className="border-b font-body py-2 border-white/10"
              >
                {link}
              </li>
            ))}
            <li>
              <button className="w-full bg-white text-black font-body transition px-4 py-2 rounded-xl text-sm">
                Book a Test Drive
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
