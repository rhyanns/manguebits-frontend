import React, { useState } from "react";
import styles from "./styleFormPost.module.css";
import { createPost } from "../../services/helpers/posts";
import type { Posts } from "../../types/Posts";

interface FormPostProps {
  communityId: number;
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

function FormPost({ communityId, posts, setPosts }: FormPostProps) {
  const [conteudo, setConteudo] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🟢 handleSubmit acionado");

    if (!conteudo.trim()) {
      console.warn("⚠️ Campo de conteúdo vazio. Abortando envio.");
      alert("Digite algo antes de publicar!");
      return;
    }

    console.log("📤 Enviando post para o backend...");
    console.log("➡️ ID da comunidade:", communityId);
    console.log("➡️ Conteúdo enviado:", conteudo);

    try {
      setLoading(true);

      const response = await createPost(communityId, { conteudo });
      console.log("✅ Resposta recebida do backend:", response);

      const novoPost: Posts = response.data;
      console.log("🆕 Novo post criado:", novoPost);

      // Atualiza a lista de posts
      setPosts([novoPost, ...posts]);
      console.log("📋 Lista de posts atualizada:", [novoPost, ...posts]);

      // Limpa o formulário
      setConteudo("");
      setShowForm(false);
      console.log("🧹 Formulário limpo e fechado.");
    } catch (error: any) {
      console.error("❌ Erro ao criar o post:", error);

      if (error.response) {
        console.error("🧩 Erro detalhado da API:", error.response.data);
        console.error("📡 Status HTTP:", error.response.status);
      }

      alert("Não foi possível criar o post. Tente novamente.");
    } finally {
      setLoading(false);
      console.log("🔚 Finalizando processo de criação de post.");
    }
  };

  return (
    <>
      <div className={`${styles.flex} ${styles["p-078"]} ${styles["mb-2"]}`}>
        <button
          onClick={() => {
            console.log("🟠 Botão '+ Post' clicado. Estado atual:", !showForm);
            setShowForm(!showForm);
          }}
          className={`${styles["btn-publicar"]} ${styles["btn"]} ${styles["p-1"]} ${styles["radius-2"]}`}
        >
          {showForm ? "Cancelar" : "+ Post"}
        </button>
      </div>

      {showForm && (
        <div className={`${styles.flex} ${styles["p-078"]} ${styles["w-full"]}`}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["p-2"]} ${styles["radius-2"]} ${styles["bg-opacity"]}`}
          >
            <label className={styles["label"]}>Conteúdo do post:</label>
            <textarea
              value={conteudo}
              onChange={(e) => {
                setConteudo(e.target.value);
                console.log("✍️ Conteúdo digitado:", e.target.value);
              }}
              placeholder="Escreva seu post..."
              className={`${styles["textarea"]} ${styles["p-1"]} ${styles["radius-2"]}`}
            />

            <button
              type="submit"
              disabled={loading}
              className={`${styles["btn-publicar"]} ${styles["btn"]} ${styles["mt-2"]}`}
            >
              {loading ? "Publicando..." : "Publicar"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default FormPost;
