import "./styles/globals.css";

export const metadata = {
  title: "Flow2",
  description: "Flow2 Official Website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div className="background-container">
          <img src="/images/bg_left.jpg" className="bg-left" />
          <img src="/images/bg_right.jpg" className="bg-right" />
        </div>

        <div className="content-overlay">
          {children}
        </div>
      </body>
    </html>
  );
}