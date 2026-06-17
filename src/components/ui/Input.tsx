
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // Add any additional props here
    label?: string;
}

const Input = (props: InputProps) => {
    return (
        <input
            className="ml-2 w-32  accent-blue-900 text-4xl text-amber-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            {...props}
        />
    )
}

export default Input;