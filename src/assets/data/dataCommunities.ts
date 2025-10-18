// src/data/dataCommunities.ts

export interface Community {
  id: number;
  nome: string;
  descricao: string;
  categoria:
    | "Tecnologia"
    | "Games"
    | "Arte"
    | "Esportes"
    | "Música"
    | "Cinema"
    | "Literatura"
    | "Outros";
  popularidade: number;
  seguindo: boolean;
  seguidores: number; // ✅ Novo campo
  avatarUrl: string;
  bannerUrl: string;
}

export const communities: Community[] = [
  {
    id: 1,
    nome: "Comunidade React Brasil",
    descricao: "Discussões sobre React, TypeScript e desenvolvimento front-end.",
    categoria: "Tecnologia",
    popularidade: 95,
    seguindo: true,
    seguidores: 12500,
    avatarUrl: "https://avatars.githubusercontent.com/u/6412038?s=200&v=4",
    bannerUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    nome: "Gamers da Noite",
    descricao: "Compartilhe dicas, conquistas e memes de games.",
    categoria: "Games",
    popularidade: 88,
    seguindo: false,
    seguidores: 9800,
    avatarUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    bannerUrl:
      "https://images.unsplash.com/photo-1616469829935-c86189bc7590?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 3,
    nome: "Arte Urbana SP",
    descricao: "Espaço para artistas urbanos e amantes da arte de rua.",
    categoria: "Arte",
    popularidade: 72,
    seguindo: false,
    seguidores: 6100,
    avatarUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 4,
    nome: "Futebol Mania",
    descricao: "Debates, resultados e curiosidades sobre futebol.",
    categoria: "Esportes",
    popularidade: 80,
    seguindo: true,
    seguidores: 8900,
    avatarUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 5,
    nome: "Música Independente",
    descricao: "Descubra novas bandas e músicos independentes.",
    categoria: "Música",
    popularidade: 65,
    seguindo: false,
    seguidores: 5200,
    avatarUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 6,
    nome: "Cinema Cult",
    descricao: "Discussões sobre filmes clássicos e cults.",
    categoria: "Cinema",
    popularidade: 58,
    seguindo: false,
    seguidores: 4300,
    avatarUrl:
      "https://images.unsplash.com/photo-1542204165-8e6a3f37f0d5?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 7,
    nome: "Leitores de Fantasia",
    descricao: "Clube para fãs de livros de fantasia e aventura.",
    categoria: "Literatura",
    popularidade: 62,
    seguindo: true,
    seguidores: 4800,
    avatarUrl:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 8,
    nome: "Tech Startups",
    descricao: "Comunidade para empreendedores e entusiastas de tecnologia.",
    categoria: "Tecnologia",
    popularidade: 77,
    seguindo: false,
    seguidores: 7200,
    avatarUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 9,
    nome: "League of Legends BR",
    descricao: "Discussões, estratégias e novidades sobre LoL.",
    categoria: "Games",
    popularidade: 85,
    seguindo: true,
    seguidores: 10300,
    avatarUrl:
      "https://images.unsplash.com/photo-1600255848191-8a43193c4c01?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1606813902773-27cc92e5b3df?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 10,
    nome: "Pintura e Ilustração",
    descricao: "Espaço para artistas compartilharem técnicas e obras.",
    categoria: "Arte",
    popularidade: 60,
    seguindo: false,
    seguidores: 4400,
    avatarUrl:
      "https://images.unsplash.com/photo-1526948531399-320e7e9caa5b?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 11,
    nome: "Maratona de Séries",
    descricao: "Para quem ama maratonar séries e trocar recomendações.",
    categoria: "Cinema",
    popularidade: 70,
    seguindo: false,
    seguidores: 5800,
    avatarUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 12,
    nome: "Rock Clássico",
    descricao: "Discussões sobre bandas e álbuns de rock clássico.",
    categoria: "Música",
    popularidade: 55,
    seguindo: true,
    seguidores: 4600,
    avatarUrl:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 13,
    nome: "Clube do RPG",
    descricao: "Para fãs de RPG de mesa e online compartilharem aventuras.",
    categoria: "Games",
    popularidade: 68,
    seguindo: false,
    seguidores: 6100,
    avatarUrl:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 14,
    nome: "Desenvolvedores Python",
    descricao: "Comunidade para troca de conhecimentos em Python.",
    categoria: "Tecnologia",
    popularidade: 74,
    seguindo: true,
    seguidores: 7800,
    avatarUrl:
      "https://images.unsplash.com/photo-1581091870623-efc1f18f6e3f?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 15,
    nome: "Fãs de Literatura Brasileira",
    descricao: "Discussões sobre autores e obras brasileiras.",
    categoria: "Literatura",
    popularidade: 61,
    seguindo: false,
    seguidores: 5000,
    avatarUrl:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1496104679561-38b3b4d6b39b?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 16,
    nome: "Culinária Criativa",
    descricao: "Espaço para compartilhar receitas e dicas de cozinha.",
    categoria: "Outros",
    popularidade: 50,
    seguindo: false,
    seguidores: 3900,
    avatarUrl:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 17,
    nome: "Yoga e Bem-Estar",
    descricao: "Discussões sobre práticas de yoga e vida saudável.",
    categoria: "Outros",
    popularidade: 52,
    seguindo: true,
    seguidores: 4100,
    avatarUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 18,
    nome: "Hip-Hop BR",
    descricao: "Para fãs de rap e cultura hip-hop brasileira.",
    categoria: "Música",
    popularidade: 64,
    seguindo: false,
    seguidores: 5400,
    avatarUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 19,
    nome: "Cinemagia",
    descricao: "Para amantes de cinema mágico e fantasia no cinema.",
    categoria: "Cinema",
    popularidade: 59,
    seguindo: false,
    seguidores: 4800,
    avatarUrl:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 20,
    nome: "Esportes Radicais",
    descricao: "Compartilhe experiências e dicas de esportes radicais.",
    categoria: "Esportes",
    popularidade: 66,
    seguindo: true,
    seguidores: 6300,
    avatarUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=200&q=60",
    bannerUrl:
      "https://images.unsplash.com/photo-1516569422758-4f53e1b19b24?auto=format&fit=crop&w=1200&q=60",
  },
];
