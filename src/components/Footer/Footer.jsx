import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6  mt-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-10">
        
        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            of squamate reptiles, with over 6,000 species, continents except
            Antarctica ranging across
          </p>
        </div>

        {/* Data Policy */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Data policy</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Cookies</a></li>
            <li><a href="#" className="hover:text-white">Data safety</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Kids</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Men</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
  © {new Date().getFullYear()} PBK. All rights reserved.
</div>

    </footer>
  );
}
