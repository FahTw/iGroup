"use client";
import TaskStat from "@/components/Card/TaskStat";
import TaskList from "@/components/Card/TaskList";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


const page = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [tasks, setTasks] = useState([]);
  const handleCreateTask = () => {
    // Handle task creation logic here
    if (!taskName) {
      alert("กรุณาใส่ชื่องาน");
      return;
    }

    const newTask = {
      name: taskName,
      description: taskDescription,
    };

    //setTasks((prevTasks) => [prevTasks, newTask]);

    console.log("New Task Created:", newTask);
    console.log("All Tasks:", [...tasks, newTask]);

    setTaskName("");
    setTaskDescription("");
    setOpen(false);
  };

  return (
    <div className="min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Task</h1>
          <button 
            onClick={() => setOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm">สร้างงาน</button>
        </div>

        {/* Stats row */}
        <TaskStat />

        {/* Task cards/list */}
        <TaskList />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>สร้างงานใหม่</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">ชื่องาน</label>
              <Input type="text" placeholder="ป้อนชื่องาน" className="w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">คำอธิบาย</label>
              <Textarea placeholder="ป้อนคำอธิบายงาน" className="w-full" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateTask}>สร้างงาน</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;