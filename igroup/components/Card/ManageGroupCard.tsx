"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface Group {
    userId?: string
    groupId: string
    state?: string
    group: object
    owner?: string
    isOwner?: boolean
    description?: string
    users?: number
}

const ManageGroupCard = () => {

    const [groups, setGroups] = useState<Group[]>([])

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
        data.groups.map((group: any) => {
            console.log(group);
        })
        console.log(data,groups)
        setGroups(data.groups);
        } catch (err) {
        console.error(err);
        }
    };

    useEffect(() => {
        getGroups();
    }, [])


    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {groups.map((group) => (
                <Card
                    key={group.groupId}
                    className="p-6 bg-[#ffffff] border border-[#e4e4e7] hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-[#0059ff] font-medium text-lg mb-1">{group.group.name}</h3>
                            <p className="text-[#b1b1b1] text-sm">{group.group.desc}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Badge className="bg-[#0059ff] text-[#ffffff] hover:bg-[#0059ff]/90">Mini group</Badge>

                            <div className="flex items-center gap-1 text-[#b1b1b1] text-sm">
                                <Users className="w-4 h-4" />
                                <span>ใช้งาน {group.owner}</span>
                            </div>

                            {group.isOwner ? (
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