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

        <footer className="p-4 text-center text-sm text-gray-500 w-full shadow-md">
          <div className="flex justify-between px-10">
            <p>Copyright 2025 by iGroup</p>
            <p>Made by Arm, Chogun, Fah</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
