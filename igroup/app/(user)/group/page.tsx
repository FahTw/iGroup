import TaskList from "@/components/Card/TaskList";
import TaskStat from "@/components/Card/TaskStat"
import Sidebar from "@/components/Sidebar/Sidebar";

const page = () => {
  return (

    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Hello, IT66070032</h1>

      {/* Top statistics - uses responsive grid so each stat is equal */}
      <TaskStat />

      {/* Recent tasks list - shares same container width and spacing */}
      <TaskList />

      {/* Two-column area for upcoming & recent activity */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Upcoming Deadline</h2>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Recent Group Activity</h2>
        </div>
      </div>
    </div>



  );
}
export default page