import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
    {
        id: 1,
        title: "กลุ่มโง่แต่ดันขยัน",
        description: "กลุ่มย่อยของกลุ่มหลักของสถาบันกิจ",
        users: "2/5",
        status: "เข้าร่วม",
        statusColor: "bg-[#0059ff]",
    },
    {
        id: 2,
        title: "กลุ่มโง่แต่ดันขยัน",
        description: "กลุ่มย่อยของกลุ่มหลักของสถาบันกิจ",
        users: "2/5",
        status: "ออกแล้ว",
        statusColor: "bg-[#f64548]",
    }
]
const GroupViewCard = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {projects.map((project) => (
                <Card
                    key={project.id}
                    className="p-6 bg-[#ffffff] border border-[#e4e4e7] hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-[#0059ff] font-medium text-lg mb-1">{project.title}</h3>
                            <p className="text-[#b1b1b1] text-sm">{project.description}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Badge className="bg-[#0059ff] text-[#ffffff] hover:bg-[#0059ff]/90">Mini Project</Badge>

                            <div className="flex items-center gap-1 text-[#b1b1b1] text-sm">
                                <Users className="w-4 h-4" />
                                <span>ใช้งาน {project.users}</span>
                            </div>

                            <Button className={`${project.statusColor} text-[#ffffff] hover:${project.statusColor}/90`}>
                                {project.status}
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
export default GroupViewCard