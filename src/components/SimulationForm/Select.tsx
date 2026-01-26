import styles from "./Select.module.css";

type SelectProps = {
  text: string;
  name: string;
  options: Array<{ id: string | number; name: string }>;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  disabled?: boolean;
};

function Select({ text, name, options, handleOnChange, value, disabled }: SelectProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{text}:</label>
      <select id={name} name={name} value={value} onChange={handleOnChange} disabled={disabled}>
        <option></option>
      </select>
    </div>
  );
}

export default Select;
