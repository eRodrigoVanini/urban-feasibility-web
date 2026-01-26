import style from "./SimulationForm.module.css";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

export function SimulationForm() {
  return (
    <div className={style.simulationCard}>
      <form>
        <div className={style.formHeader}>
          <h3>Simular Viabilidade</h3>
        </div>

        <div className={style.formGroup}>
          <Select
            name="citySelect"
            text="Selecione o Município"
            options={[]}
            handleOnChange={() => {}}
            value=""
          />
        </div>

        <div className={style.formGroup}>
          <label>Zona</label>
          <select disabled>
            <option>Selecione a zona...</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <label>Tipo de uso</label>
          <select disabled>
            <option>Selecione o uso...</option>
          </select>
        </div>

        <div className={style.formGroup}>
          <label>Área do Lote (m²)</label>
          <input type="number" placeholder="Ex: 500" />
        </div>

        <SubmitButton
          text="Calcular Agora"
          name="calculateButton"
        />
      </form>
    </div>
  );
}
