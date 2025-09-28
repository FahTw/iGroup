import Navbar from "@/components/Navbar/Navbar";
import HomeCard from "@/components/Card/HomeCard";
import Logo from "@/components/Navbar/Logo";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center gap-10 p-8 md:p-28">
        {/* Hero section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl">
            <Logo />
          </h1>
          <h2>แพลตฟอร์มการจัดการงานกลุ่มภายในคณะ IT</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </main>
    </div>
  );
}
