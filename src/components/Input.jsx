export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  minlength = ""
}) {
  return (
    <div>
      <label htmlFor={labelFor}>
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={customClass}
        placeholder={placeholder}
        minLength={minlength}
      />
    </div>
  )
}