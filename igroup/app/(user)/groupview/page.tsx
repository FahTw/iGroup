"use client";
import GroupViewCard from "@/components/Card/GroupViewCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import { useEffect, useState } from "react";

const Page = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        // ตรวจสอบว่าคืนมาเป็น array หรือไม่
        const safeGroups = Array.isArray(data?.groups) ? data.groups : [];
        setGroups(safeGroups);
      })
      .catch((err) => console.error("Error loading groups:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        กำลังโหลดข้อมูล...
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="CLOUD COMPUTING"
        subtitle="เลือกกลุ่มที่ต้องการเข้าร่วมหรือสร้างกลุ่ม"
      />
      <GroupViewCard groups={groups} />
    </div>
  );
};
export default Page;
