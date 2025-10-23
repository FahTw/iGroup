import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "../ui/card";
const TaskList = () => {
    const tasks = [
        { id: 1, title: "Task 1", description: "Description for Task 1" },
        { id: 2, title: "Task 2", description: "Description for Task 2" },
        { id: 3, title: "Task 3", description: "Description for Task 3" },
    ];
    return (
        <div className="w-full mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tasks.map((task) => (
                <Card key={task.id} className="mb-0 p-4 border w-full">
                    <CardContent key={task.id} className="mb-2 p-0">
                        <CardTitle className="py-2">{task.title}</CardTitle>
                        <CardDescription>{task.description}</CardDescription>
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