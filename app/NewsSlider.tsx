export default function NewsSlider() {
  return (
    <div style={{
      width: "50%",
      height: "100%",
      background: "rgba(20,20,20,0.7)",
      borderRadius: "15px",
      padding: "20px"
    }}>
      <h2>Latest News</h2>

      <div style={{ marginTop: "20px" }}>
        <h3>New Update Released!</h3>
        <p>April 18, 2024</p>
        <p>Discover the exciting new features now available!</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Event Schedule</h3>
        <p>April 10, 2024</p>
        <p>Check out the upcoming events for this month!</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Patch Notes 1.2</h3>
        <p>April 02, 2024</p>
        <p>Read the latest patch notes and improvements.</p>
      </div>
    </div>
  );
}