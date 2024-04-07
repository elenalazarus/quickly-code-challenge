export default function Checkbox({
    labelFor,
    labelText,
    value,
    handleChange,
    id,
    name,
    customClass
}) {
    return (
        <div>
            <label htmlFor={labelFor}>
                {labelText}
            </label>
            <input
                type="checkbox"
                checked={value}
                onChange={handleChange}
                id={id}
                name={name}
                className={customClass}
            />
        </div>
    );
};