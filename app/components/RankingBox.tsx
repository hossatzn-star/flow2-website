export default function RankingBox() {
  const players = [
    "1. Drakon - LV 99",
    "2. Celestia - LV 95",
    "3. ShadowWolf - LV 92",
    "4. Artheon - LV 88",
    "5. LunaStar - LV 85"
  ];

  return (
    <div className="console-box">
      <div className="box-title">Top Players</div>

      <div style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}>
        {players.map((player, index) => (
          <div
            key={index}
            style={{
              padding: "10px 0",
              fontSize: "18px",
              borderBottom: index !== players.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none",
              textShadow: "2px 2px 4px black"
            }}
          >
            {player}
          </div>
        ))}
      </div>
    </div>
  );
}