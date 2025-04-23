export const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total</div>
        <div className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          {totalTasks}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Pendientes</div>
        <div className="text-2xl font-semibold text-amber-600 dark:text-amber-400">
          {pendingTasks}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Completadas</div>
        <div className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
          {completedTasks}
        </div>
        {totalTasks > 0 && (
          <div className="text-xs mt-1 text-gray-400 dark:text-gray-500">
            ({completionPercentage}%)
          </div>
        )}
      </div>
    </div>
  );
};