export default function DownloadBox() {
  return (
    <div className="console-box" style={{ width: "100%" }}>
      <div className="box-title">Download</div>

      <p style={{ opacity: 0.9 }}>
        Download the latest version of the Flow2 client and start your adventure.
      </p>

      <button style={{ marginTop: "20px" }}>
        DOWNLOAD CLIENT
      </button>

      <button style={{ background: "#444", color: "white" }}>
        SYSTEM REQUIREMENTS
      </button>
    </div>
  );
}