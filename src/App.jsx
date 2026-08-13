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
    return (
        <div className="app-container">
            <h1 className="app-title">To DO List</h1>
            <form className='form align-center m-2 flex-col' onSubmit={submitForm} action="">
                <div className="m-2 flex-col justify-center">
                    <input type="text" name="title" placeholder="Title" className="items-center rounded-md bg-white/5 pl-3 m-2 block min-w-0 bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                    <input type="text" name="title" placeholder="Title" className="items-center rounded-md bg-white/5 pl-3 m-2 block min-w-0 bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                    <textarea type="text" cols={100} rows={10} name="description" placeholder="Description" className="items-center rounded-md bg-white/5 pl-3 m-2 block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                </div>
                <button type="submit" className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-white/20 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-indigo-500">Add Task</button>
            </form>

            <div className="card-grid">
                {tasks.map(task => (
                    <ToDoCard key={task.id} title={task.title} description={task.description} />
                ))}
            </div>
        </div>
    )
}

export default App
