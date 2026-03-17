export default function LoginBox() {
  return (
    <div style={{
      width: "25%",
      background: "rgba(20,20,20,0.7)",
      borderRadius: "15px",
      padding: "20px"
    }}>
      <h2>Login</h2>

      <input placeholder="Username" style={{ width: "100%", padding: "10px", marginTop: "10px" }} />
      <input placeholder="Password" type="password" style={{ width: "100%", padding: "10px", marginTop: "10px" }} />

      <div style={{ marginTop: "10px" }}>
        <input type="checkbox" /> Remember Me
      </div>

      <button style={{
        width: "100%",
        padding: "10px",
        marginTop: "20px",
        background: "#ffcc00",
        border: "none",
        fontWeight: "bold"
      }}>
        LOGIN
      </button>

      <button style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        background: "#333",
        border: "none",
        color: "white"
      }}>
        CREATE ACCOUNT
      </button>

      <p style={{ marginTop: "10px", color: "#aaa", cursor: "pointer" }}>
        Forgot Password?
      </p>
    </div>
  );
}