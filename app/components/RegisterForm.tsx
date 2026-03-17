export default function RegisterForm() {
  return (
    <div className="console-box" style={{ width: "100%" }}>
      <div className="box-title">Create Account</div>

      {/* USERNAME */}
      <label>Username</label>
      <input type="text" placeholder="Choose a username" />

      {/* EMAIL */}
      <label style={{ marginTop: "10px" }}>Email</label>
      <input type="email" placeholder="Enter your email" />

      {/* PASSWORD */}
      <label style={{ marginTop: "10px" }}>Password</label>
      <input type="password" placeholder="Choose a password" />

      {/* CONFIRM PASSWORD */}
      <label style={{ marginTop: "10px" }}>Confirm Password</label>
      <input type="password" placeholder="Repeat your password" />

      {/* REGISTER BUTTON */}
      <button style={{ marginTop: "20px" }}>
        CREATE ACCOUNT
      </button>
    </div>
  );
}