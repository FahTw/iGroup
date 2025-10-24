import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
const Subject = () => {
  return (
    <Card className="border p-2">
      <CardHeader>
        <CardTitle>Cloud Computing</CardTitle>
        <CardTitle>06016</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
            วิชาคลาวด์คอมพิวติ้งเป็นวิชาที่ศึกษาเกี่ยวกับการใช้เทคโนโลยีคลาวด์ในการจัดเก็บและประมวลผลข้อมูลบนอินเทอร์เน็ต
        </CardDescription>
      </CardContent>

    </Card>
  )
}
export default Subject