"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

const projects = [
    {
        id: 1,
        title: "กลุ่มโง่แต่ดันขยัน",
        description: "กลุ่มย่อยของกลุ่มหลักของสถาบันกิจ",
        name: "Mini Project",
        status: "เข้าร่วม",
        subject: "cloud computing",
        owner: true,
        users: "2/5",
    },
    {
        id: 2,
        title: "กลุ่มโง่แต่ดันขยัน",
        description: "กลุ่มย่อยของกลุ่มหลักของสถาบันกิจ",
        name: "Mini Project",
        status: "เข้าร่วม",
        subject: "cloud computing",
        owner: false,
        users: "2/5",
    }
]
const ManageGroupCard = () => {

    const getGroups = async () => {
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

        console.log(data)
        } catch (err) {
        console.error(err);
        }
    };

    useEffect(() => {
        getGroups();
    }, [])


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

                            {project.owner ? (
                                <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
                                    แก้ไข
                                </Button>
                            ) : (
                                <Button className="bg-red-500 text-white hover:bg-red-600">
                                    ออกจากกลุ่ม
                                </Button>
                            )}

                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
export default ManageGroupCard