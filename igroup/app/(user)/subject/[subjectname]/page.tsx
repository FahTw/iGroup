"use client";

import GroupViewCard from "@/components/Card/GroupViewCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const SubjectGroupsPage = () => {
  const { subjectName } = useParams() as { subjectName: string };
  const [groups, setGroups] = useState<any[]>([]);
  const [subject, setSubject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!subjectName) return;
    const accessToken = localStorage.getItem("accessToken");
    console.log("Access Token:", accessToken);

    const fetchData = async () => {
      try {
        const resSubject = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subject/${subjectName}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const dataSubject = await resSubject.json();
        if (!dataSubject.success) throw new Error(dataSubject.message);
        setSubject(dataSubject.subject);
      } catch (err: any) {
        setError(err.message);
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
      <HeroSection title={subject.name} subtitle="เลือกกลุ่มที่ต้องการเข้าร่วมหรือสร้างกลุ่ม" />
      <GroupViewCard />
    </div>
  );
};

export default SubjectGroupsPage;
