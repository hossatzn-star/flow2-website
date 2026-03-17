export default function LoginBox() {
  return (
    <div className="console-box">
      <div className="box-title">Login</div>

      {/* USERNAME */}
      <label style={{ fontSize: "16px" }}>Username</label>
      <input type="text" placeholder="Enter username" />

      {/* PASSWORD */}
      <label style={{ marginTop: "12px", fontSize: "16px" }}>Password</label>
      <input type="password" placeholder="Enter password" />

      {/* REMEMBER ME */}
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "15px"
        }}
      >
        <input type="checkbox" style={{ width: "18px", height: "18px" }} />
        <span>Remember Me</span>
      </div>

      {/* LOGIN BUTTON */}
      <button style={{ marginTop: "20px" }}>
        LOGIN
      </button>

      {/* CREATE ACCOUNT BUTTON */}
      <button style={{ background: "#444", color: "white" }}>
        CREATE ACCOUNT
      </button>

      {/* FORGOT PASSWORD */}
      <div
        style={{
          marginTop: "14px",
          textAlign: "center",
          fontSize: "14px",
          cursor: "pointer",
          opacity: 0.8,
          textShadow: "2px 2px 4px black"
        }}
      >
        Forgot Password?
      </div>
    </div>
  );
}