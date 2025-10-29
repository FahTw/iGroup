"use client";

import GroupViewCard from "@/components/Card/GroupViewCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const SubjectGroupsPage = () => {
  const params = useParams();
  const subjectName = params.subjectName;

  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!subjectName) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 1. ดึงข้อมูล Subject จาก API เดิม
        const resSubject = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subject`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const dataSubject = await resSubject.json();
        if (!dataSubject.success) throw new Error(dataSubject.message);

        // หา Subject ที่ตรงกับ subjectName
        const matchedSubject = dataSubject.subjects?.find((s: any) => s.name === subjectName);
        if (!matchedSubject) throw new Error("Subject not found");

        setSubject(matchedSubject);

        // 2. ดึงกลุ่มทั้งหมดจาก API เดิม
        const resGroups = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const dataGroups = await resGroups.json();
        if (!dataGroups.success) throw new Error(dataGroups.message);

        // กรองกลุ่มเฉพาะ Subject นี้
        const filteredGroups = Array.isArray(dataGroups.groups)
          ? dataGroups.groups.filter((g: any) => g.subjectId === matchedSubject.id)
          : [];

        setGroups(filteredGroups);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error loading data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subjectName]);

  if (loading) return <p className="text-gray-500 text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;
  if (!subject) return <p className="text-gray-500 text-center mt-10">Subject not found</p>;

  return (
    <div>
      <HeroSection
        title={subject.name}
        subtitle="เลือกกลุ่มที่ต้องการเข้าร่วมหรือสร้างกลุ่ม"
      />
      <GroupViewCard groups={groups} />
    </div>
  );
};

export default SubjectGroupsPage;
