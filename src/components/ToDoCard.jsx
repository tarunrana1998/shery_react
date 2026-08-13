export default function ToDoCard({ title, description }) {
    return (
        <div className="rounded-xl border border-white/20 bg-white/5 p-6 shadow-lg backdrop-blur-sm text-left w-full max-w-sm">
            {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
            {description && <p className="text-gray-400 whitespace-pre-wrap">{description}</p>}
        </div>
    );
}
