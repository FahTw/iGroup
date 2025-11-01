import { Inter, Jua } from "next/font/google"
import "../../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Prompt } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";

const prompt = Prompt({ subsets: ["latin"], weight: "300" });
// const jua = Jua({ subsets: ["latin"], weight: "400" })
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          {/* Main content */}
          <div className="flex-1 p-6">{children}</div>
        </div>
      </body>

    </html>
  );
}
