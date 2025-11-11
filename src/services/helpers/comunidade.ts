import api from "../api";
// import type { ComunidadeCreateDTO } from "../../types/Comunidade";
import type { Community } from "../../assets/data/dataCommunities";

export const createComunidade = (comunidade: Community) => {
  return api.post("/comunidades/v1/", comunidade);
};

export const getComunidades = async () => {
  const response = await api.get("/comunidades/v1");
  return response.data; // retorna apenas os dados da resposta
};

export const getComunidade = async (id: number) => {
  const response = await api.get(`/comunidades/v1/${id}`);
  return response.data; // retorna apenas os dados da resposta
};

export const getPostDeUmaComunidadeEspecifica = async (idComunidade: number) => {
  const response = await api.get(`/comunidades/v1/fetchPosts/${idComunidade}`);
  return response.data; // retorna apenas os dados da resposta
};