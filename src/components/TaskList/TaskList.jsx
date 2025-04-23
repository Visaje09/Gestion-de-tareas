import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({ tasks, filter, onToggleComplete, onEditTask, onDeleteTask }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No hay tareas...</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
};