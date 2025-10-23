import TaskList from "@/components/Card/TaskList";
import TaskStat from "@/components/Card/TaskStat"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Calendar } from "lucide-react";

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="max-w-6xl mx-auto px-8 py-10">
            <div>
                <h1 className="text-3xl font-bold mb-6">Hello, IT66070032</h1>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0059ff] hover:bg-[#0047cc] text-white px-6 py-2 rounded-lg font-medium"
                >
                    สร้างงาน
                </Button>
            </div>

            {/* Top statistics - uses responsive grid so each stat is equal */}
            <TaskStat />

            {/* Recent tasks list - shares same container width and spacing */}
            <TaskList />
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-[#ffffff] max-w-md rounded-xl p-6">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-[#1a1a1a] text-center mb-4">สร้างงาน</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <Input
                            placeholder="หัวข้อ"
                            className="w-full px-4 py-3 border border-[#e4e4e7] rounded-lg text-sm placeholder:text-[#b1b1b1]"
                        />
                        <Textarea
                            placeholder="รายละเอียด"
                            className="w-full px-4 py-3 border border-[#e4e4e7] rounded-lg text-sm placeholder:text-[#b1b1b1] min-h-[120px] resize-none"
                        />
                        <div className="relative">
                            <Input
                                placeholder="วันสิ้นสุด"
                                className="w-full px-4 py-3 border border-[#e4e4e7] rounded-lg text-sm placeholder:text-[#b1b1b1]"
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b1b1b1]" />
                        </div>
                        <Button className="w-full bg-[#0059ff] hover:bg-[#0047cc] text-white py-3 rounded-lg font-medium">
                            สร้างงาน
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default page;