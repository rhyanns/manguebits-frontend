import api from "../api";
import type { Participante, Login } from "../../types/Participante";

export const registerParticipante = (participante: Participante) => {
  return api.post("/participantes/register", participante);
};

export const loginParticipante = (login: Login) => {
  return api.post("/participantes/login", login);
};
