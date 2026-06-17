interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> 
{
    children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => {
    return (
        <label
            className="text-gray-800 p-1 text-xl font-medium"
            {...props}
        >{children}
        </label>
    );
};