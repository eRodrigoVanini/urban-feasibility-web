import styles from "./Select.module.css";

type SelectProps = {
  text: string;
  name: string;
  options: Array<{ id: string | number; name: string }>;
  value: string;
  disabled?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
  text,
  name,
  options,
  value,
  disabled,
  handleOnChange,
}: SelectProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{text}:</label>
      <select
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
      >
        <option></option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
