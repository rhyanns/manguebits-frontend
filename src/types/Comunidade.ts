import type { Posts } from "./Posts";

export type Categoria = "JOGOS" | "TECNOLOGIA" | "MUSICA" | "ENTRETENIMENTO" | "POLITICA" | "ESPORTES";

export interface ComunidadeCreateDTO {
  nome: string;
  descricao: string;
  administrador: string;
  categoria: Categoria;
}

export interface Comunidade {
  id: number;
  nome: string;
  descricao: string;
  administrador: string;
  categoria: string;
  createdAt: string;
  updatedAt: string;
  posts: Posts[];
}