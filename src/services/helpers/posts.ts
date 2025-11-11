import api from "../api";

export const createPost = (idComunidade: number, data: { conteudo: string }) => {
  return api.post(`comunidades/v1/create-posts/${idComunidade}`, data);
};

export const retornarPostsDeTodasAsComunidades = () => {
  return api.get(`comunidades/v1/fetchPosts`);
};

export const updatePost = (idPost: number, data: { curtidas: number }) => {
  return api.put(`posts/v1/${idPost}`, data);
};