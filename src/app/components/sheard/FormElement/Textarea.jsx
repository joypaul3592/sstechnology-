export default function Textarea({ idFor, label, placeholder, ...res }) {
    return (
        <div>
            <label htmlFor={idFor} className="block mb-2 text-sm font-medium text-primary">
                {label}
            </label>
            <textarea id={idFor} name={idFor} rows="6" className="block p-2.5 w-full text-sm text-gray-200 bg-[#040412] rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-primary  " placeholder={placeholder}  {...res} required></textarea>
        </div>
    )
}
