"use client";

interface NavbarProps {
  setSection: (value: string) => void;
}

export default function Navbar({ setSection }: NavbarProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        boxShadow: "0 4px 10px rgba(0,0,0,0.6)"
      }}
    >
      {/* LOGO GRANDE E CENTRATO */}
      <img
        src="/images/logo.png"
        alt="Flow2 Logo"
        style={{
          height: "120px",
          marginTop: "10px",
          objectFit: "contain",
          filter: "drop-shadow(0 0 8px black)"
        }}
      />

      {/* MENU SOTTO IL LOGO */}
      <div
        style={{
          display: "flex",
          gap: "45px",
          fontSize: "26px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px black",
          marginTop: "5px"
        }}
      >
        <span className="nav-item" onClick={() => setSection("home")}>Home</span>
        <span className="nav-item" onClick={() => setSection("register")}>Register</span>
        <span className="nav-item" onClick={() => setSection("download")}>Download</span>
        <span className="nav-item" onClick={() => setSection("forum")}>Forum</span>
        <span className="nav-item" onClick={() => setSection("shop")}>Shop</span>
        <span className="nav-item" onClick={() => setSection("support")}>Support</span>
      </div>
    </div>
  );
}