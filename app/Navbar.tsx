"use client";

export default function Navbar({ setSection }: any) {
  return (
    <div style={{
      width: "100%",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(4px)",
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
      textShadow: "2px 2px 4px black"
    }}>
      <span onClick={() => setSection("home")} className="nav-item">Home</span>
      <span onClick={() => setSection("register")} className="nav-item">Register</span>
      <span onClick={() => setSection("download")} className="nav-item">Download</span>
      <span onClick={() => setSection("forum")} className="nav-item">Forum</span>
      <span onClick={() => setSection("shop")} className="nav-item">Shop</span>
      <span onClick={() => setSection("support")} className="nav-item">Support</span>
    </div>
  );
}