import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";


const HomeCard = () => {
  return (
    <Card className="w-[312px] h-[152px]">
        <CardHeader>
            <div className="flex justify-center items-center gap-2 pb-4 border-b border-gray-300 ">
                <Users className="w-5 h-5" />
                <CardTitle className="text-blue-700">Group Creation</CardTitle>
            </div>
            <CardDescription className="text-[10px]">ช่วยให้ทุกคนสามารถสร้างกลุ่มโปรเจกต์ได้เองผ่านฟอร์มที่ใช้ง่าย รองรับการระบุชื่อกลุ่ม รายละเอียดกลุ่ม จำนวนสมาชิกสูงสุดและแท็กวิชาที่เกี่ยวข้องเพื่อให้เพื่อนในคณะสามารถค้นหาและเข้าร่วมได้สะดวก</CardDescription>
        </CardHeader>
    </Card>
  )
}
export default HomeCard