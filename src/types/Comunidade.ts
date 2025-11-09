export type Categoria = "JOGOS" | "TECNOLOGIA" | "MUSICA" | "ENTRETENIMENTO" | "POLITICA" | "ESPORTES";

export interface ComunidadeCreateDTO {
  nome: string;
  descricao: string;
  administrador: string;
  categoria: Categoria;
}
