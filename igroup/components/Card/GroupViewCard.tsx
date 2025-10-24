"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Users } from "lucide-react";
import { useEffect } from "react";

interface Group {
  id: number;
  name: string;
  desc: string;
  owner: string;
}

const GroupViewCard = ({ groups = [] }: { groups?: Group[] }) => {
  useEffect(() => {
    console.log("Groups:", groups);
  }, [groups]);

  if (!groups.length) {
    return (
      <div className="max-w-4xl mx-auto text-center text-gray-500 py-10">
        ยังไม่มีกลุ่มให้แสดงผล
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {groups.map((group) => (
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
              <Button className={`bg-blue-500 text-[#ffffff] hover:bg-blue-500/90`}>
                  Join
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GroupViewCard;
