import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "../ui/card";

// 1. สร้าง Interface (ตัวแปร) สำหรับ Task (เพื่อใช้ใน TypeScript)
interface Task {
  id?: number; // ID อาจจะยังไม่มี ถ้ายังไม่เข้า DB
  name: string;
  description?: string;
}

// 2. รับ props ที่ชื่อ tasks (และกำหนดชนิดข้อมูลเป็น Task[])
const TaskList = ({ tasks = [] }: { tasks: Task[] }) => {
    
    // 3. (ลบ) "const tasks = [...]" ที่ hard-code ไว้ออกไป

    // 4. (แนะนำ) เพิ่มโค้ดเช็คว่า tasks ว่างเปล่าหรือไม่
    if (tasks.length === 0) {
        return (
            <div className="w-full mt-6 text-center text-gray-500">
                ยังไม่มีงาน... คลิก 'สร้างงาน' เพื่อเริ่มต้น
            </div>
        );
    }

    // 5. โค้ด .map() จะใช้ 'tasks' (prop) ที่รับมาโดยอัตโนมัติ
    return (
        <div className="w-full mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
                // 6. ใช้ index เป็น key ชั่วคราว (เพราะ task ใหม่ยังไม่มี id)
                <Card key={index} className="mb-0 p-4 border w-full">
                    <CardContent className="mb-2 p-0">
                        {/* 7. เปลี่ยน task.title เป็น task.name (เพราะ page.tsx ส่ง 'name') */}
                        <CardTitle className="py-2">{task.name}</CardTitle>
                        <CardDescription>{task.description || "ไม่มีคำอธิบาย"}</CardDescription>
                    </CardContent>
                    <CardFooter>
                        <div className="flex justify-between gap-4 text-sm">
                            <div className="bg-red-600 text-white p-2 rounded-sm">Due: 01/12/2025</div>
                            <div className="bg-yellow-400 text-black p-2 rounded-sm">รอดำเนินการ</div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
          </div>
        </div>
    )
}
export default TaskList