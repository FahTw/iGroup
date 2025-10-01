import { Inter, Jua } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] })
const jua = Jua({ subsets: ["latin"], weight: "400" })

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        
        {/* Navbar ใช้ Jua แค่ Logo */}
        <header>
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
