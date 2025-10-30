"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

interface Group {
  id: string; // note: backend sends UUIDs, not numbers
  name: string;
  desc: string;
  owner: string;
  isOwner?: boolean;
  isPending?: boolean;
}

const GroupViewCard = ({ groups = [] }: { groups?: Group[] }) => {
  const router = useRouter();
  const [updatedGroups, setUpdatedGroups] = useState<Group[]>(groups);

  const fetchGroups = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setUpdatedGroups(data.groups);
      }
    } catch (err) {
      console.error("Error fetching groups:", err);
    }
  };

  const joinGroup = async (groupId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group/join/${groupId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      credentials: 'include',
    });

    const data = await res.json();
    if (!data.success) return toast.error(data.message);
    toast.success(data.message);
    getStatus(); // refresh group status
  };

  const getStatus = async () => {
    try {
      const myGroupRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/group/mygroup`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        credentials: 'include',
      });

      const data = await myGroupRes.json();
      if (!data.success) return;

      // Extract group IDs and states
      const userGroups = data.groups || [];

      // Update displayed group list with ownership or pending state
      const merged = groups.map((g) => {
        const found = userGroups.find((ug: any) => ug.groupId === g.id);
        return {
          ...g,
          isOwner: g.isOwner, // if you store it locally
          isPending: found?.state === "PENDING",
        };
      });

      setUpdatedGroups(merged);
    } catch (err) {
      console.error(err);
    }
  };

  
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return router.push("/auth/login");
    getStatus();
  }, [groups]);

  if (!updatedGroups.length) {
    return (
      <div className="max-w-4xl mx-auto text-center text-gray-500 py-10">
        ยังไม่มีกลุ่มให้แสดงผล
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <Toaster position="top-right" />
      {updatedGroups.map((group) => (
        <Card
          key={group.id}
          className="p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-[#0059ff] font-medium text-lg mb-1">
                {group.name}
              </h3>
              <p className="text-[#b1b1b1] text-sm">{group.desc}</p>
            </div>

            <div className="flex items-center gap-4">
              <Badge className="bg-[#0059ff] text-white hover:bg-[#0059ff]/90">
                Mini group
              </Badge>

              <div className="flex items-center gap-1 text-[#b1b1b1] text-sm">
                <Users className="w-4 h-4" />
                <span>เจ้าของ {group.owner}</span>
              </div>

              <button
                className="bg-[#0059ff] text-white hover:bg-[#0059ff]/90 px-3 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => joinGroup(group.id)}
                disabled={group.isOwner || group.isPending}
              >
                {group.isOwner
                  ? "Owner"
                  : group.isPending
                  ? "Pending..."
                  : "Join"}
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GroupViewCard;
