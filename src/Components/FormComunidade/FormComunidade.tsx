import React, { useState } from "react";
import styles from "./styleFormComunidade.module.css";
import type { Community } from "../../assets/data/dataCommunities";

interface FormCommunityProps {
  comunidades: Community[];
  setComunidades: React.Dispatch<React.SetStateAction<Community[]>>;
}

function FormCommunity({ comunidades, setComunidades }: FormCommunityProps) {
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState<Community["categoria"]>("Outros");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !descricao.trim()) {
      alert("Preencha o nome e a descrição da comunidade!");
      return;
    }

    const novaComunidade: Community = {
      id: comunidades.length + 1,
      nome,
      descricao,
      categoria,
      popularidade: 0,
      seguindo: false,
      seguidores: 0,
      avatarUrl:
        avatarUrl ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      bannerUrl:
        bannerUrl ||
        "https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&w=1200&q=60",
    };

    setComunidades([novaComunidade, ...comunidades]);
    setShowForm(false);

    // limpa o formulário
    setNome("");
    setDescricao("");
    setCategoria("Outros");
    setAvatarUrl("");
    setBannerUrl("");
  };

  return (
    <>
        <div className={`${styles.flex} ${styles["p-078"]} ${styles["w-full"]}`}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.flex} ${styles["flex-col"]} ${styles["w-full"]} ${styles["p-2"]} ${styles["radius-2"]} ${styles["bg-opacity"]}`}
          >
            <label className={styles["label"]}>Nome da Comunidade:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome..."
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            />

            <label className={styles["label"]}>Descrição:</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva sua comunidade..."
              className={`${styles["textarea"]} ${styles["p-1"]} ${styles["radius-2"]}`}
            />

            <label className={styles["label"]}>Categoria:</label>
            <select
              value={categoria}
              onChange={(e) =>
                setCategoria(e.target.value as Community["categoria"])
              }
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            >
              <option value="Tecnologia">Tecnologia</option>
              <option value="Games">Games</option>
              <option value="Arte">Arte</option>
              <option value="Esportes">Esportes</option>
              <option value="Música">Música</option>
              <option value="Cinema">Cinema</option>
              <option value="Literatura">Literatura</option>
              <option value="Outros">Outros</option>
            </select>

            <label className={styles["label"]}>URL do Avatar:</label>
            <input
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="Cole a URL da imagem do avatar..."
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            />

            <label className={styles["label"]}>URL do Banner:</label>
            <input
              type="url"
              value={bannerUrl}
              onChange={(e) => setBannerUrl(e.target.value)}
              placeholder="Cole a URL da imagem do banner..."
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            />

            <button
              type="submit"
              className={`${styles["btn-publicar"]} ${styles["btn"]} ${styles["mt-2"]}`}
            >
              Criar Comunidade
            </button>
          </form>
        </div>
      
    </>
  );
}

export default FormCommunity;
