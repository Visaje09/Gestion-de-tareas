import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskStats } from "./components/TaskStats/TaskStats";

// Modelo de datos para cada tarea
const initialTasks = [
  {
    id: uuidv4(),
    title: "Aprender React",
    description: "Estudiar los fundamentos de React",
    completed: false,
    createdAt: new Date()
  }
];

function App() {

  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map(task => task.id === taskData.id ? taskData : task));
    } else {
      setTasks([...tasks, taskData]);
    }
    setEditingTask(null);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-pastel-blue dark:bg-dark-blue transition-colors duration-300">
      <div className="container mx-auto p-4 max-w-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-dark-blue-lighter dark:text-pastel-blue mb-2">
            Gestor de Tareas
          </h1>
          <p className="text-dark-blue-lighter/80 dark:text-pastel-blue/60">
            Minimalista • Productivo
          </p>
        </header>

        <TaskForm
          editingTask={editingTask}
          onSaveTask={handleSaveTask}
          onCancelEdit={() => setEditingTask(null)}
        />

        <TaskStats tasks={tasks} />

        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={tasks}
          filter={filter}
          onToggleComplete={handleToggleComplete}
          onEditTask={setEditingTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;