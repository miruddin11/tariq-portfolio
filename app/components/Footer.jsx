import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    url: "https://github.com/miruddin11",
    name: "GitHub",
    username: "@miruddin11",
    color: "#000000",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/mir-tariquddin",
    name: "LinkedIn",
    username: "@mir-tariquddin",
    color: "#0A66C2",
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/mir_tariquddin",
    name: "Twitter",
    username: "@mir_tariquddin",
    color: "#1DA1F2",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/mir_tariquddin",
    name: "Instagram",
    username: "@mir_tariquddin",
    color: "#E1306C",
  },
];

const SocialMediaModal = ({ isOpen, onClose, socialLinks }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map(({ icon: Icon, url, name, username, color }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white/10 border border-white/10"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: `${color}1A` }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-white/60 truncate">{username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer
        className={`w-full py-6 ${
          isDarkMode ? "bg-darkBg text-white" : "bg-lightBg text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-3 mb-6">
            {SOCIAL_LINKS.map(({ icon: Icon, url, name, color, username }) => (
              <div key={name} className="group">
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex items-center transition-all duration-300 ease-in-out group-hover:w-52 group-hover:px-4 w-auto px-0 rounded-2xl"
                >
                  {/* Icon Circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300"
                    style={{
                      backgroundColor:
                        isDarkMode && name === "GitHub" ? "#ffffff" : "#ffffff",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{
                        color:
                          isDarkMode && name === "GitHub" ? "#000000" : color,
                      }}
                    />
                  </div>

                  {/* Text (only visible on hover) */}
                  <div className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs opacity-80">{username}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Bar - Sleeker */}
          <div
            className={`flex flex-col items-center pt-4 border-t ${
              isDarkMode ? "border-white/10" : "border-gray-200"
            }`}
          >
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Mir Tariquddin Logo"
              width={140}
              height={50}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer mb-2"
              onClick={() => setIsModalOpen(true)}
            />
            <p className="text-sm opacity-70">
              © {currentYear} Mir Tariquddin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Social Media Modal */}
      <SocialMediaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        socialLinks={SOCIAL_LINKS}
      />
    </>
  );
};

export default Footer;
