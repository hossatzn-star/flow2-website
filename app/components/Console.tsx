import NewsSlider from "./NewsSlider";
import LoginBox from "./LoginBox";
import RankingBox from "./RankingBox";
import RegisterForm from "./RegisterForm";
import DownloadBox from "./DownloadBox";
import ForumBox from "./ForumBox";
import ShopBox from "./ShopBox";
import SupportBox from "./SupportBox";

export default function Console({ section }: any) {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "40px"
    }}>
      <div style={{
        width: "1200px",
        minHeight: "600px",
        background: "rgba(0,0,0,0.6)",
        borderRadius: "20px",
        padding: "30px",
        display: "flex",
        gap: "20px",
        color: "white"
      }}>

        {section === "home" && (
          <>
            <div style={{ width: "50%" }}>
              <NewsSlider />
            </div>

            <div style={{ width: "25%" }}>
              <RankingBox />
            </div>

            <div style={{ width: "25%" }}>
              <LoginBox />
            </div>
          </>
        )}

        {section === "register" && <RegisterForm />}
        {section === "download" && <DownloadBox />}
        {section === "forum" && <ForumBox />}
        {section === "shop" && <ShopBox />}
        {section === "support" && <SupportBox />}
      </div>
    </div>
  );
}