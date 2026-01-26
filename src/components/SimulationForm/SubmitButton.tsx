import styles from "./Submit.module.css";

type SubmitButtonProps = {
  text: string;
  name: string;
};

function SubmitButton({ text, name }: SubmitButtonProps) {
  return (
    <div>
      <button
        type="button"
        name={name}
        className={styles.btn}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
