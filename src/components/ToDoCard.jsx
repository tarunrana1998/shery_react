export default function ToDoCard({ id, title, description, onDelete }) {
    return (
        <div className="relative flex flex-col w-72 bg-[#fdfae1] rounded-lg shadow-xl mt-4 overflow-visible">
            {/* Top Notebook Binding Design */}
            <div className="absolute -top-3 left-0 right-0 flex justify-evenly px-4 z-10 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-3 h-7 bg-zinc-900 rounded-full border border-black shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)]"></div>
                ))}
            </div>

            {/* Note Content with lines */}
            <div 
                className="flex flex-col flex-grow pt-8 px-5 pb-5 min-h-[16rem] rounded-lg"
                style={{
                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e6e4cc 31px, #e6e4cc 32px)',
                    backgroundSize: '100% 32px',
                    backgroundPosition: '0 8px',
                }}
            >
                {title && (
                    <h3 className="text-xl font-extrabold text-black mb-1" style={{ lineHeight: '32px' }}>{title}</h3>
                )}
                {description && (
                    <p className="text-gray-500 font-bold whitespace-pre-wrap flex-grow" style={{ lineHeight: '32px' }}>{description}</p>
                )}
                
                <div className="mt-6 pt-2">
                    <button 
                        onClick={() => onDelete(id)}
                        className="w-full py-2 bg-[#ff4b4b] text-white font-bold rounded-md shadow hover:bg-[#e03a3a] active:scale-[0.98] transition-all"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
