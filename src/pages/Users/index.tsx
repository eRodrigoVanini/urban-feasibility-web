import "./style.css";

export function Users() {
  return (
    <div className="container">
      <form>
        <fieldset>
          <legend>Cadastro de Usuário</legend>
          <div className="input-wrapper">
            <label htmlFor="fullname">Nome completo</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Qual o nome da criança"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="birth">Data de Nascimento</label>
            <input type="date" name="birthdate" id="birth" lang="pt-br" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Users;
