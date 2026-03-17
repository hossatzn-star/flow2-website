import "./globals.css";

export const metadata = {
  title: "Flow2",
  description: "Flow2 Official Website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div className="background-container">
          <img src="/images/bg.png" alt="background" />
        </div>

        <div className="content-overlay">
          {children}
        </div>
      </body>
    </html>
  );
}