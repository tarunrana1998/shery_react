import { useState } from 'react';
import './App.css'
import ToDoCard from './components/ToDoCard';

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    function submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData);
        console.table(formData.getAll('title'));
        const title = formData.get("title") || "";
        const description = formData.get("description") || "";

        if (!title.trim() && !description.trim()) return;

        const newTask = {
            id: crypto.randomUUID(),
            title,
            description,
        };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        e.target.reset();
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-black text-white font-sans overflow-hidden">
            {/* Left Side: Add Notes Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/20 flex flex-col items-start justify-start">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Add Notes</h2>
                <form className="flex flex-col gap-6 w-full max-w-xl" onSubmit={submitForm}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Title..." 
                        className="w-full p-4 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-200 text-lg" 
                    />
                    <textarea 
                        name="description" 
                        placeholder="Description..." 
                        rows={6} 
                        className="w-full p-4 bg-transparent border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-200 text-lg resize-y" 
                    />
                    <button 
                        type="submit" 
                        className="w-full py-4 px-6 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Add Note
                    </button>
                </form>
            </div>

            {/* Right Side: Recent Notes */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col bg-black h-screen overflow-y-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Recent Notes</h2>
                <div className="flex flex-wrap gap-8 w-full max-w-4xl items-start">
                    {tasks.map(task => (
                        <ToDoCard key={task.id} id={task.id} title={task.title} description={task.description} onDelete={deleteTask} />
                    ))}
                    {tasks.length === 0 && (
                        <p className="text-gray-500 text-lg">No notes added yet.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
