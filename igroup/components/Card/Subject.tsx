"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";

const Subject = () => {
  interface SubjectType {
    id?: string;
    name: string;
    code?: string;
    desc?: string;
    owner?: string | null;
  }

  const [subjects, setSubjects] = useState<SubjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const headers: Record<string, string> = { "Content-Type": "application/json" };
        const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subject`, {
          method: "GET",
          headers,
          credentials: "include",
        });

        if (!response.ok) {
          const text = await response.text().catch(() => "");
          throw new Error(`Failed to fetch subjects: ${response.status} ${text}`);
        }

        const result = await response.json();
        // eslint-disable-next-line no-console
        console.debug("/subject response:", result);

        let list: SubjectType[] = [];
        if (result && Array.isArray(result.subjects)) {
          list = result.subjects.map((s: any) => ({ id: s.id, name: s.name, code: s.code, desc: s.desc, owner: s.user?.username ?? s.owner ?? null }));
        } else if (result && result.name) {
          list = [{ id: result.id, name: result.name, code: result.code, desc: result.desc, owner: result.owner ?? null }];
        }

        if (mounted) {
          setSubjects(list);
          setLoading(false);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error("Error fetching subjects:", err);
        if (mounted) {
          setError(err.message || "Error fetching subjects");
          setLoading(false);
        }
      }
    };

    fetchSubjects();
    return () => { mounted = false };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!subjects || subjects.length === 0) return <p className="text-gray-500">ยังไม่พบหัวข้อ</p>;

  return (
    <div className="space-y-4 grid p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((s) => (
        <Card key={s.id ?? s.name} className="border p-2">
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <div>
                <CardTitle>{s.name}</CardTitle>
                {s.code && <div className="text-sm text-muted-foreground">{s.code}</div>}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{s.desc}</CardDescription>
          </CardContent>
          <Link href={`/subject/group/${s.name}`} className="block text-center text-blue-500 border">
            กลุ่ม
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Subject;
