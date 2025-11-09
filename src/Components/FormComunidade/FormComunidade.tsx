import React, { useState, type ChangeEvent, type JSX } from "react";
import styles from "./styleFormComunidade.module.css";
import type { Community } from "../../assets/data/dataCommunities";
import { createComunidade } from "../../services/helpers/comunidade";
import type { Categoria } from "../../types/Comunidade";



function FormCommunity(): JSX.Element {
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState<Community["categoria"]>("Outros");
  // const [avatarUrl, setAvatarUrl] = useState("");
  // const [bannerUrl, setBannerUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome.trim() || !descricao.trim()) {
      alert("Preencha o nome e a descrição da comunidade!");
      return;
    }

    const userData = localStorage.getItem("user");
    const usuario = userData ? JSON.parse(userData) : null;
    const administrador = usuario?.nome || "admin";

    const novaComunidade: Community = {
      nome,
      descricao,
      administrador,
      categoria,
      // popularidade: 0,
      // seguindo: false,
      // seguidores: 0,
      // avatarUrl:
      //   avatarUrl ||
      //   "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      // bannerUrl:
      //   bannerUrl ||
      //   "https://images.unsplash.com/photo-1536148935331-408321065b18?auto=format&fit=crop&w=1200&q=60",
    };

    console.log("Corpo enviado para o backend:", novaComunidade);

    try {
      const response = await createComunidade(novaComunidade);
  
      console.log("Comunidade criada: ", response.data);
      alert("Comunidade criada com sucesso! :)");
    } catch (error: any) {
      console.error("Erro ao criar comunidade:", error);
      alert(error.response?.data?.message || "Erro na criação")
    }
  };



    const handleNomeChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setNome(e.target.value);
    };
  
    const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      setDescricao(e.target.value);
    };
  
    const handleCategoriaChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      setCategoria(e.target.value as Categoria);
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
              onChange={handleNomeChange}
              placeholder="Digite o nome..."
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            />

            <label className={styles["label"]}>Descrição:</label>
            <textarea
              value={descricao}
              onChange={handleDescricaoChange}
              placeholder="Descreva sua comunidade..."
              className={`${styles["textarea"]} ${styles["p-1"]} ${styles["radius-2"]}`}
            />

            <label className={styles["label"]}>Categoria:</label>
            <select
              value={categoria}
              onChange={handleCategoriaChange}
              className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            >
                <option value="TECNOLOGIA">Tecnologia</option>
                <option value="ESPORTES">Esportes</option>
                <option value="JOGOS">Jogos</option>
                <option value="POLITICA">Política</option>
                <option value="ENTRETENIMENTO">Entretenimento</option>
                <option value="OUTROS">Outros</option>
            </select>

            {/* // <label className={styles["label"]}>URL do Avatar:</label>
            // <input
            //   type="url"
            //   value={avatarUrl}
            //   onChange={(e) => setAvatarUrl(e.target.value)}
            //   placeholder="Cole a URL da imagem do avatar..."
            //   className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            // />

            // <label className={styles["label"]}>URL do Banner:</label>
            // <input
            //   type="url"
            //   value={bannerUrl}
            //   onChange={(e) => setBannerUrl(e.target.value)}
            //   placeholder="Cole a URL da imagem do banner..."
            //   className={`${styles["input"]} ${styles["p-1"]} ${styles["radius-1"]}`}
            // /> */}

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
