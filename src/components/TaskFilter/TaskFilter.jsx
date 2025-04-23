export const TaskFilter = ({ currentFilter, onFilterChange }) => {
    const filters = [
      { id: 'all', label: 'Todas' },
      { id: 'active', label: 'Activas' },
      { id: 'completed', label: 'Completadas' }
    ]
  
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              currentFilter === filter.id
                ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 shadow-inner'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    )
  }