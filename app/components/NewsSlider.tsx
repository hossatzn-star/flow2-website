export default function NewsSlider() {
  const news = [
    {
      title: "New Update Released!",
      date: "April 18, 2024",
      text: "Discover the exciting new features now available!"
    },
    {
      title: "Event Schedule",
      date: "April 10, 2024",
      text: "Check out the upcoming events for this month!"
    },
    {
      title: "Patch Notes 1.2",
      date: "April 02, 2024",
      text: "Read the latest patch notes and improvements."
    }
  ];

  return (
    <div className="console-box">
      <div className="box-title">Latest News</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              paddingBottom: "15px",
              borderBottom:
                index !== news.length - 1
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "none"
            }}
          >
            <h3
              style={{
                margin: "0 0 5px 0",
                fontSize: "20px",
                textShadow: "2px 2px 4px black"
              }}
            >
              {item.title}
            </h3>

            <small style={{ opacity: 0.8 }}>{item.date}</small>

            <p style={{ marginTop: "5px", opacity: 0.9 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}