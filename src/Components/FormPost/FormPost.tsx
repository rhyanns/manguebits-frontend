// ...existing code...
import React from "react";
import { useState } from "react";
import styles from "./styleFormPost.module.css";

interface FormPostProps {
  communityId: number;
  community: { nome: string };
  posts: any[];
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

function FormPost({ communityId, community, posts, setPosts }: FormPostProps) {
  const [legenda, setLegenda] = useState("");
  const [postConteudo, setPostConteudo] = useState("");
  const [tipo, setTipo] = useState<"texto" | "imagem">("texto");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!legenda.trim() || !postConteudo.trim()) {
      alert("Preencha todos os campos antes de publicar!");
      return;
    }

    const novoPost = {
      idComunidade: communityId,
      nomeGrupo: community.nome,
      nomePerfil: "Ryan Vitor",
      legenda,
      post: postConteudo,
      tipo,
      dataPostagem: new Date().toISOString(),
      curtidas: 0,
      comentarios: 0,
    };

    setPosts([novoPost, ...posts]);
    setLegenda("");
    setPostConteudo("");
    setTipo("texto");
    setShowForm(false);
  };

  return (
    <>
      <div className={`${styles.flex} ${styles["p-078"]} ${styles["mb-2"]}`}>
        <button
          onClick={() => setShowForm(!showForm)}
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
            <label className={styles["label"]}>Título:</label>
            <input
              type="text"
              value={legenda}
              onChange={(e) => setLegenda(e.target.value)}
              placeholder="Digite um título..."
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            />

            <label className={styles["label"]}>
              {tipo === "imagem" ? "URL da imagem:" : "Conteúdo do post:"}
            </label>
            <textarea
              value={postConteudo}
              onChange={(e) => setPostConteudo(e.target.value)}
              placeholder={
                tipo === "imagem" ? "Cole a URL da imagem..." : "Escreva seu post..."
              }
              className={`${styles["textarea"]} ${styles["p-1"]} ${styles["radius-2"]}`}
            />

            <button
              type="submit"
              className={`${styles["btn-publicar"]} ${styles["btn"]} ${styles["mt-2"]}`}
            >
              Publicar
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default FormPost;
// ...existing code...