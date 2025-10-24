"use client";
import Profile from "@/components/Form/Profile";
import HeroSection from "@/components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 เพิ่ม state โหลด

  const getProfile = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return router.push("/auth/login");

      const res = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await res.json();

      if (data.message === "invalid_or_expired_token") {
        return router.push("/auth/login");
      }

      setProfile(data.profile);
    } catch (err) {
      toast.error("เกิดข้อผิดพลาดในการโหลดข้อมูล");
    } finally {
      setLoading(false); // ✅ ตั้ง loading เป็น false เมื่อจบ
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // ✅ render loading screen หรือ skeleton ก่อน
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">กำลังโหลดข้อมูล...</p>
      </div>
    );
  }

  // ✅ render เฉพาะเมื่อได้ profile แล้ว
  return (
    <div>
      <HeroSection
        className="!h-[229px]"
        title="PROFILE"
        subtitle="แก้ไขข้อมูลส่วนตัว"
      />
      <Profile profile={profile} />
      <Toaster />
    </div>
  );
};

export default Page;