import Footer from "@/components/Footer";
import "./globals.css";
import favicon from "./favicon.ico"

export const metadata = {
  title: "Google",
  description: "Search anything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon}/>
      </head>
      <body className="relative min-h-screen bg-stone-800 text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
