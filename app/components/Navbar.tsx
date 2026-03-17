"use client";

export default function Navbar({ setSection }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
        color: "white",
        marginTop: "10px"
      }}
    >
      {/* LOGO CENTRATO E DIMENSIONE CORRETTA */}
      <img
        src="/images/logo.png"
        alt="Flow2 Logo"
        style={{
          height: "85px",
          marginRight: "60px"
        }}
      />

      {/* MENU CENTRATO E SPAZIATO */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px black",
        }}
      >
        <span className="nav-item" onClick={() => setSection("home")}>
          Home
        </span>
        <span className="nav-item" onClick={() => setSection("register")}>
          Register
        </span>
        <span className="nav-item" onClick={() => setSection("download")}>
          Download
        </span>
        <span className="nav-item" onClick={() => setSection("forum")}>
          Forum
        </span>
        <span className="nav-item" onClick={() => setSection("shop")}>
          Shop
        </span>
        <span className="nav-item" onClick={() => setSection("support")}>
          Support
        </span>
      </div>
    </div>
  );
}