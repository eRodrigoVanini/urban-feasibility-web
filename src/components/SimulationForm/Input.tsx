import styles from "./Input.module.css";

type InputProps = {
  text: string;
  name: string;
  value: string;
  disabled?: boolean;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ text, name, value, disabled, handleOnChange }: InputProps) {
  return (
    <div className={styles.Input}>
      <label htmlFor={name}>{text}:</label>
      <input
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
