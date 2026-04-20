import { useState } from "react";
import "./App.css";
// ajuste devops
function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validarLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos, tente novamente");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Digite o email de sua preferencia, por favor"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Digite uma senha forte, por favor"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={validarLogin}>Acessar</button>

      <p>{mensagem}</p>
    </div>
  );
}

export default App;
