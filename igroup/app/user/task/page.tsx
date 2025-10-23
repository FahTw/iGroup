import TaskList from "@/components/Card/TaskList";
import TaskStat from "@/components/Card/TaskStat"

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Hello, IT66070032</h1>

      {/* Top statistics - uses responsive grid so each stat is equal */}
      <TaskStat />

      {/* Recent tasks list - shares same container width and spacing */}
      <TaskList />
    </div>
  );
}
export default page;