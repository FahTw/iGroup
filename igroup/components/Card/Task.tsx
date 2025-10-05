"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "@/components/ui/badge";

const taskList = [
  {
    title: "ทำระบบ Login",
    description: "ระบบล็อกอินหลังบ้านไอโชทำด่วน",
    due: "01/12/2021",
    status: "รอดำเนินการ",
  },
  {
    title: "เชื่อมต่อฐานข้อมูล",
    description: "เชื่อม API กับฐานข้อมูล PostgreSQL",
    due: "03/12/2021",
    status: "กำลังดำเนินการ",
  },
];

const Task = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {taskList.map((task, index) => (
        <Card
          key={index}
          className="w-[244px] h-[132px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between p-6"
        >
          <CardHeader className="p-0">
            <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <p className="text-gray-700 text-sm">{task.description}</p>
          </CardContent>
          <div className="flex justify-start">
            <Badge className="bg-red-600">
              Due: {task.due}
            </Badge>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Task;
