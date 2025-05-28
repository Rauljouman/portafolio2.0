import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "languages", "projects", "experience"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "languages", icon: "🐞", label: "Languages" },
    { id: "projects", icon: "🧠", label: "Projects" },
    { id: "experience", icon: "💻", label: "Experience" },
  ];

  return (
    <>
      <div className="sidebar">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`sidebar-btn ${activeSection === link.id ? "active" : ""}`}
          >
            <span className="icon">{link.icon}</span>
            <span className="tooltip">{link.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 64px;
          height: 100vh;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
          z-index: 999;
        }

        .sidebar-btn {
          position: relative;
          width: 40px;
          height: 40px;
          background-color: #1e1e1e;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.3s ease;
          transform: scale(1);
        }

        .sidebar-btn:hover {
          background-color: white;
          color: black;
          transform: scale(1.15);
        }

        .sidebar-btn.active {
          background-color: white;
          color: black;
        }

        .tooltip {
          position: absolute;
          left: 50px;
          background-color: #333;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(0);
          transition: opacity 0.2s ease, transform 0.2s ease;
          pointer-events: none;
        }

        .sidebar-btn:hover .tooltip {
          opacity: 1;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }

          .main-content {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
