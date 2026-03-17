"use client";

export default function Navbar({ setSection }: any) {
  return (
    <div style={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(4px)",
      color: "white"
    }}>
      
      <img src="/images/logo.png" alt="Flow2 Logo" style={{ height: "70px" }} />

      <div style={{
        display: "flex",
        gap: "40px",
        fontSize: "22px",
        fontWeight: "bold",
        textShadow: "2px 2px 4px black"
      }}>
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