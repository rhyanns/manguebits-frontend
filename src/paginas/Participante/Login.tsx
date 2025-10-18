import { useState, type ChangeEvent, type JSX } from "react";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./styleLogin.module.css";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
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

          <div className={styles["login-fields"]}>
            <div className={styles["input-group"]}>
              <User className={styles["icon"]} size={18} />
              <input
                type="email"
                placeholder="Seu e-mail ou CPF"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className={styles["input-group"]}>
              <Lock className={styles["icon"]} size={18} />
              <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <button className={styles["login-button"]}>ENTRAR</button>

          <div className={styles["separator"]}></div>

          <p className={styles["register-text"]}>
            Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
