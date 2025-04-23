export const TaskItem = ({ task, onToggleComplete, onEditTask, onDeleteTask }) => {
  return (
    <div className="task-item group relative p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-300/50 transition-all duration-300">
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
            task.completed
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-gray-300 dark:border-gray-600 group-hover:border-emerald-400'
          }`}
        >
          {task.completed && '✓'}
        </button>

        <div className={`flex-1 ${task.completed ? 'line-through opacity-75' : ''}`}>
          <h3 className="font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 mt-1 transition-colors">
              {task.description}
            </p>
          )}
        </div>

        <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity duration-200">
          <button
            onClick={() => onEditTask(task)}
            className="p-1.5 text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all duration-200"
            aria-label="Editar"
          >
            ✏️
          </button>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-all duration-200"
            aria-label="Eliminar"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  )
}