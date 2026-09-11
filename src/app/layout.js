import "./globals.css";

export const metadata = {
  title: "SHISHIR // C-DECK_V1.0",
  description: "Futuristic terminal manga interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen relative selection:bg-zinc-800 selection:text-emerald-400">
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}