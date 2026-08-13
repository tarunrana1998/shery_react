import './App.css'

function App() {
    function submitForm(e) {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <div className="app-container">
            <h1 className="app-title">To DO List</h1>
            <form className='form align-center m-2 flex-col' onSubmit={submitForm} action="">
                <div className="m-2 flex-col justify-center">
                    <input type="text" name="title" placeholder="Title" className="items-center rounded-md bg-white/5 pl-3 m-2 block min-w-0 bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                    <textarea type="text" cols={100} rows={10} name="description" placeholder="Description" className="items-center rounded-md bg-white/5 pl-3 m-2 block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                </div>
                <button type="submit" className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-white/20 data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-indigo-500">Add Task</button>
            </form>

            <div className="card-grid">

            </div>
        </div>
    )
}

export default App
