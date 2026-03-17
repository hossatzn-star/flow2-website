export default function NewsSlider() {
  return (
    <div className="console-box">
      <div className="box-title">Latest News</div>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 5px 0" }}>New Update Released!</h3>
        <small>April 18, 2024</small>
        <p style={{ marginTop: "5px", opacity: 0.9 }}>
          Discover the exciting new features now available!
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 5px 0" }}>Event Schedule</h3>
        <small>April 10, 2024</small>
        <p style={{ marginTop: "5px", opacity: 0.9 }}>
          Check out the upcoming events for this month!
        </p>
      </div>

      <div>
        <h3 style={{ margin: "0 0 5px 0" }}>Patch Notes 1.2</h3>
        <small>April 02, 2024</small>
        <p style={{ marginTop: "5px", opacity: 0.9 }}>
          Read the latest patch notes and improvements.
        </p>
      </div>
    </div>
  );
}