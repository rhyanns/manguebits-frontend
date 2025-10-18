import { useState, type ChangeEvent, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, IdCard, Lock } from "lucide-react"; // Ícones utilizados nos campos do formulário
import styles from "./styleRegister.module.css";
import type { Participante } from "../../types/Participante";
import api from "../../services/api"

export default function TelaCadastro(): JSX.Element {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    const novoParticipante: Participante = { nome, cpf, email, senha };

    try {
      const response = await api.post("/participantes", novoParticipante);
      console.log("Participante criado:", response.data);
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error: any) {
      console.error("Erro ao criar participante:", error);
      alert(error.response?.data?.message || "Erro no cadastro");
    }
  };

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCpf(e.target.value);
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setConfirmarSenha(e.target.value);
  };

  return (
    <div className={styles["cadastro-container"]}>
      <div className={styles["cadastro-card"]}>
        {/* Lado esquerdo do card */}
        <div className={styles["cadastro-left"]}>
          <img
            src="/icone_figma.png"
            alt="Logo MangueBITS"
            className={styles["cadastro-logo-img"]}
          />
          <h1 className={styles["cadastro-logo"]}>MangueBITS</h1>
          <p className={styles["cadastro-welcome"]}>Bem vindo de volta!</p>
          <p className={styles["cadastro-subtext"]}>Acesse sua conta agora mesmo</p>
          <Link to="/login" className={styles["cadastro-login-btn"]}>
            ENTRAR
          </Link>
        </div>

        {/* Lado direito do card */}
        <div className={styles["cadastro-right"]}>
          <h2 className={styles["cadastro-title"]}>Crie sua conta</h2>
          <p className={styles["cadastro-subtitle"]}>Informe seus dados</p>

          <form className={styles["cadastro-form"]} onSubmit={handleSubmit}>
            <div className={styles["cadastro-input-group"]}>
              <User className={styles["cadastro-input-icon"]} size={18} />
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={handleNomeChange}
                required
              />
            </div>

            <div className={styles["cadastro-input-group"]}>
              <Mail className={styles["cadastro-input-icon"]} size={18} />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className={styles["cadastro-input-group"]}>
              <IdCard className={styles["cadastro-input-icon"]} size={18} />
              <input
                type="text"
                placeholder="CPF (Opcional)"
                value={cpf}
                onChange={handleCpfChange}
              />
            </div>

            <div className={styles["cadastro-input-group"]}>
              <Lock className={styles["cadastro-input-icon"]} size={18} />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={handleSenhaChange}
                required
              />
            </div>

            <div className={styles["cadastro-input-group"]}>
              <Lock className={styles["cadastro-input-icon"]} size={18} />
              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChange={handleConfirmarSenhaChange}
                required
              />
            </div>

            <button type="submit" className={styles["cadastro-submit"]}>
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
