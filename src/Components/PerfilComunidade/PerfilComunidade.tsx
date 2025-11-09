import type { Community } from "../../assets/data/dataCommunities";
import styles from "./stylePerfilComunidade.module.css";
import avatarPadrao from "../../assets/img/sirigueijo2.png";
import bannerPadrao from "../../assets/img/windows-xp2.jpg";

interface PerfilComunidadeProps {
  community: Community;
}

function PerfilComunidade({ community }: PerfilComunidadeProps) {
  const banner = community.bannerUrl || bannerPadrao;
  const avatar = community.avatarUrl || avatarPadrao;

  // Função para otimizar imagens - reduz resolução e aplica compressão
  const optimizeImage = (url: string, width: number, height: number, quality: number = 70) => {
    // Se for imagem padrão, não otimiza
    if (url === bannerPadrao || url === avatarPadrao) return url;
    
    // Verifica se a URL já tem parâmetros de query
    const separator = url.includes('?') ? '&' : '?';
    
    // Adiciona parâmetros de otimização
    return `${url}${separator}width=${width}&height=${height}&quality=${quality}&format=webp&optimize=high`;
  };

  // Imagens otimizadas com resolução reduzida
  const optimizedBanner = optimizeImage(banner, 600, 150, 75); // Banner menor e mais leve
  const optimizedAvatar = optimizeImage(avatar, 80, 80, 85); // Avatar otimizado

  return (
    <div className={`${styles['w-full']} ${styles['p-078']}`}>
      {/* Banner otimizado */}
      <div className={`${styles['maxh-150']} ${styles['w-full']} ${styles['radius-1']} ${styles['overflow-hidden']} ${styles['banner-container']}`}>
        <img
          className={`${styles['w-full']} ${styles['h-full']} ${styles['object-cover']} ${styles['banner-image']}`}
          src={optimizedBanner}
          alt={`${community.nome} banner`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = bannerPadrao;
          }}
        />
      </div>

      {/* Perfil e informações com melhor destaque */}
      <div className={`${styles.flex} ${styles['flex-col']} ${styles['w-full']} ${styles['mt-3']} ${styles['p-3']} ${styles['profile-content']}`}>
        <div className={`${styles.flex} ${styles['items-start']} ${styles['gap-3']} ${styles['profile-header']}`}>
          {/* Avatar otimizado */}
          <div className={`${styles['avatar-container']} ${styles['flex-shrink-0']}`}>
            <img
              src={optimizedAvatar}
              alt={`${community.nome} avatar`}
              className={`${styles['rounded-full']} ${styles['w-20']} ${styles['h-20']} ${styles['avatar-image']} ${styles['border-2']} ${styles['border-white']}`}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = avatarPadrao;
              }}
            />
          </div>

          {/* Informações da comunidade com melhor destaque */}
          <div className={`${styles.flex} ${styles['flex-col']} ${styles['flex-1']} ${styles['min-w-0']} ${styles['community-info']}`}>
            {/* Nome com maior destaque */}
            <h1 className={`${styles['font-bold']} ${styles['text-2xl']} ${styles.fontPixel} ${styles['text-white']} ${styles['mb-1']} ${styles['community-name']} ${styles['text-shadow']}`}>
              {community.nome}
            </h1>
            
            {/* Descrição com melhor visibilidade */}
            <p className={`${styles['text-white']} ${styles['text-base']} ${styles.fontPixel} ${styles['mb-2']} ${styles['leading-relaxed']} ${styles['community-description']} ${styles['bg-black']} ${styles['bg-opacity-30']} ${styles['p-2']} ${styles['rounded']}`}>
              {community.descricao}
            </p>
            
            {/* Categoria */}
            <div className={`${styles['text-yellow-300']} ${styles['text-sm']} ${styles.fontPixel} ${styles['category']} ${styles['font-semibold']}`}>
              📁 Categoria: {community.categoria}
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className={`${styles.flex} ${styles['gap-2']} ${styles['mt-4']} ${styles['buttons-container']}`}>
          <button className={`${styles["btn"]} ${styles['bg-green-500']} ${styles['px-4']} ${styles['py-2']} ${styles.fontPixel} ${styles['text-white']} ${styles['font-bold']} ${styles['rounded-lg']} ${styles['hover:bg-green-600']} ${styles['transition-colors']}`}>
            {community.seguindo ? "✅ Seguindo" : "👥 Seguir"}
          </button>
          <button className={`${styles["btn"]} ${styles['bg-yellow-500']} ${styles['px-4']} ${styles['py-2']} ${styles.fontPixel} ${styles['text-white']} ${styles['font-bold']} ${styles['rounded-lg']} ${styles['hover:bg-yellow-600']} ${styles['transition-colors']}`}>
            ⭐ Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerfilComunidade;