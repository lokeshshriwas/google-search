import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "Google",
  description: "Search anything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-stone-800 text-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
