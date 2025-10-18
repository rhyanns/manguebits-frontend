// src/data/dataPosts.ts

export interface Post {
  idComunidade: number; // novo campo para vincular à comunidade
  nomeGrupo: string;
  nomePerfil: string;
  legenda: string;
  post: string; // pode ser imagem (URL) ou texto
  tipo: "texto" | "imagem";
  dataPostagem: string; // formato legível
  curtidas: number;
  comentarios: number;
}

export const posts: Post[] = [
  {
    idComunidade: 1, // Comunidade React Brasil
    nomeGrupo: "Comunidade React Brasil",
    nomePerfil: "Ryan Vitor",
    legenda: "Novo projeto em andamento! Usando React + TypeScript 🔥",
    post: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
    tipo: "imagem",
    dataPostagem: "2025-10-15T14:30:00",
    curtidas: 124,
    comentarios: 12
  },
  {
    idComunidade: 2, // Gamers da Noite
    nomeGrupo: "Gamers da Noite",
    nomePerfil: "Lucas Andrade",
    legenda: "Ontem consegui finalmente zerar Elden Ring! 💀",
    post: "Elden Ring é simplesmente uma obra de arte, cada batalha é uma vitória épica!",
    tipo: "texto",
    dataPostagem: "2025-10-14T22:45:00",
    curtidas: 308,
    comentarios: 54
  },
  {
    idComunidade: 3, // Arte Urbana SP (substituindo o antigo 'Design e Criação')
    nomeGrupo: "Arte Urbana SP",
    nomePerfil: "Ana Costa",
    legenda: "Explorando novos conceitos de UI minimalista 🎨",
    post: "https://images.unsplash.com/photo-1581091215367-59ab6b126b31?auto=format&fit=crop&w=800&q=60",
    tipo: "imagem",
    dataPostagem: "2025-10-13T09:20:00",
    curtidas: 89,
    comentarios: 7
  },
  {
    idComunidade: 14, // Desenvolvedores Python (usando tema DevOps/Tecnologia)
    nomeGrupo: "Desenvolvedores Python",
    nomePerfil: "Carlos Henrique",
    legenda: "Pipeline automatizado rodando liso com GitHub Actions ⚙️",
    post: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=60",
    tipo: "imagem",
    dataPostagem: "2025-10-12T17:10:00",
    curtidas: 147,
    comentarios: 19
  },
  {
    idComunidade: 8, // Tech Startups (tema Frontend Lovers → tecnologia)
    nomeGrupo: "Tech Startups",
    nomePerfil: "Mariana Oliveira",
    legenda: "CSS é amor e ódio na mesma medida 😅",
    post: "Às vezes, o problema não é o código... é o navegador 😂",
    tipo: "texto",
    dataPostagem: "2025-10-10T11:15:00",
    curtidas: 256,
    comentarios: 41
  }
];
