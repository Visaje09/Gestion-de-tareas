import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskForm = ({ editingTask, onSaveTask, onCancelEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('El título es obligatorio');
      return;
    }

    const taskData = {
      id: editingTask?.id || uuidv4(),
      title,
      description,
      completed: editingTask?.completed || false,
      createdAt: editingTask?.createdAt || new Date()
    };

    onSaveTask(taskData);
    setTitle('');
    setDescription('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        {editingTask ? '✏️ Editar Tarea' : '➕ Nueva Tarea'}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
            placeholder="Ej: Estudiar hooks de React"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 resize-none"
            placeholder="Ej: Aprender useState, useEffect y useContext"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Opcional - Máximo 200 caracteres
          </p>
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          {editingTask && (
            <button
              type="button"
              onClick={() => {
                onCancelEdit();
                setTitle('');
                setDescription('');
              }}
              className="px-5 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-600"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 shadow hover:shadow-md"
          >
            {editingTask ? 'Guardar Cambios' : 'Agregar Tarea'}
          </button>
        </div>
      </div>
    </form>
  );
};