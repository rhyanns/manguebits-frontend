import api from "../api";

export const createPost = (idComunidade: number, data: { conteudo: string }) => {
  return api.post(`comunidades/v1/create-posts/${idComunidade}`, data);
};

export const retornarPostsDeTodasAsComunidades = () => {
  return api.get(`comunidades/v1/fetchPosts`);
};
