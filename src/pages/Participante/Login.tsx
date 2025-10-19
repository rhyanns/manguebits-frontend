import { useState, type ChangeEvent, type JSX } from "react";
import { User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styleLogin.module.css";
import type { Login } from "../../types/Participante";
import { loginParticipante } from "../../services/helpers/participantes";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login: Login = { email, senha: password };

    try {
      const response = await loginParticipante(login);
      console.log("Login bem-sucedido:", response.data);

      alert(`Bem-vindo, ${response.data.nome}!`);
      navigate("/");
    } catch (error: any) {
      console.error("Erro no login:", error);
      alert(error.response?.data?.message || "Credenciais inválidas");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={`${styles["login-card-wrapper"]} ${styles["fade-in-up"]}`}>
        <div className={styles["login-card"]}>
          <div className={styles["login-header"]}>
            <div className={styles["logo-placeholder"]}>
              <img
                src="/icone_figma.png"
                alt="Logo MangueBITS"
                className={styles["logo-img"]}
              />
            </div>
            <h1 className={styles["title"]}>MangueBITS</h1>
            <p className={styles["subtitle"]}>Conecte-se à comunidade</p>
          </div>

          <form className={styles["login-fields"]} onSubmit={handleLogin}>
            <div className={styles["input-group"]}>
              <User className={styles["icon"]} size={18} />
              <input
                type="email"
                placeholder="Seu e-mail ou CPF"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className={styles["input-group"]}>
              <Lock className={styles["icon"]} size={18} />
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <button type="submit" className={styles["login-button"]}>ENTRAR</button>
          </form>

          <div className={styles["separator"]}></div>

          <p className={styles["register-text"]}>
            Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
