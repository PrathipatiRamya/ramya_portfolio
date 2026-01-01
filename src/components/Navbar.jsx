import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="navbar reveal">
      <div className="navbar-logo">Ramya Sri</div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* ☰ Hamburger */}
        <div className="navbar-hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={() => setOpen(false)}>
            Certifications
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        {/* 🌙☀️ Theme Toggle */}
        {/* 
          <li> <button onClick={() => setDark(!dark)} style={styles.themeBtn}>
            {dark ? "☀️" : "🌙"}
          </button> 
          </li>
          */}
      </ul>
    </nav>
  );
}

const styles = {
  themeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Navbar;
