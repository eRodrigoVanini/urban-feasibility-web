import './style.css';

export function SimulationForm() {
  return (
    <div className="simulation-card">
      <form>
        <div className="form-header">
          <h3>Simular Viabilidade</h3>
        </div>

        <div className="form-group">
          <label>Cidade</label>
          <select disabled>
            <option>Selecione a cidade...</option>
          </select>
        </div>

        <div className="form-group">
          <label>Zona</label>
          <select disabled>
            <option>Selecione a zona...</option>
          </select>
        </div>

        <div className="form-group">
          <label>Uso do Solo</label>
          <select disabled>
            <option>Selecione o uso...</option>
          </select>
        </div>

        <div className="form-group">
          <label>Área do Lote (m²)</label>
          <input type="number" placeholder="Ex: 500" />
        </div>

        <button type="button" className="btn-simulate">
          Calcular Agora
        </button>
      </form>
    </div>
  );
}