export default function RankingBox() {
  return (
    <div style={{
      width: "25%",
      background: "rgba(20,20,20,0.7)",
      borderRadius: "15px",
      padding: "20px"
    }}>
      <h2>Top Players</h2>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        <li>1. Drakon - LV 99</li>
        <li>2. Celestia - LV 95</li>
        <li>3. ShadowWolf - LV 92</li>
        <li>4. Artheon - LV 88</li>
        <li>5. LunaStar - LV 85</li>
      </ul>
    </div>
  );
}