"use client";

export default function Navbar({ setSection }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 4px 10px rgba(0,0,0,0.6)"
      }}
    >
      {/* LOGO CENTRALE */}
      <img
        src="/images/logo.png"
        alt="Flow2 Logo"
        style={{
          height: "90px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "15px"
        }}
      />

      {/* MENU */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px black",
          marginTop: "70px"
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