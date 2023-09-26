import CursoOnlineImg from 'assets/cursoOnline.svg';
import AssinaturaImg from 'assets/assinatura.svg';
import EBookImg from 'assets/eBook.svg';
import EventosOnlineImg from 'assets/eventosOnline.svg';
import ComunidadeImg from 'assets/comunidade.svg';
import { ReactComponent as ImagePhotoImg } from 'assets/image-photo.svg'; 
import { ReactComponent as CodigoFonteImg } from 'assets/codigoFonte.svg'; 
import { ReactComponent as AudioMusicaImg } from 'assets/audioMusica.svg'; 
import { ReactComponent as AppCelularImg } from 'assets/appCelular.svg'; 
import { ReactComponent as ArqBaixarImg } from 'assets/arqBaixar.svg'; 
import { ReactComponent as FilmesImg } from 'assets/filmes.svg'; 
import { ReactComponent as PodcastImg } from 'assets/podcast.svg'; 
import { ReactComponent as ProgBaixarImg } from 'assets/progBaixar.svg'; 

const homeProductsList = {
  main: [
    {
      "name": "Comunidade",
      "about": "Publique conteúdos frequentpes para assinantes",
      "image": ComunidadeImg,
      "info": "TODO",
      path: 'products/online-events',
      size: "280x146"
    },
    {
      "name": "Curso online",
      "about": "Aulas em um ambiente seguro",
      "image": CursoOnlineImg,
      "info": "TODO",
      path: 'products/course-online',
      size: "142x130"
    },
    {
      "name": "Assinatura",
      "about": "Para curso online e área de membros 123 1231 23",
      "image": AssinaturaImg,
      "info": "TODO",
      path: 'products/signature',
      size: "180x130",
    },
    {
      "name": "eBook",
      "about": "Arquivos em .pdf ou ePub",
      "image": EBookImg,
      "info": "TODO",
      path: 'products/ebook',
      size: "155x130"
    },
    {
      "name": "Eventos online",
      "about": "Conferências, palestras, workshops",
      "image": EventosOnlineImg,
      "info": "TODO",
      path: 'products/online-events',
      size: "178x130"
    },
  ],
  others: [
    {
      name: 'Imagem / Foto',
      Image: ImagePhotoImg
    },
    {
      name: 'Código Fonte',
      Image: CodigoFonteImg
    },
    {
      name: 'Áudio / Música',
      Image: AudioMusicaImg
    },
    {
      name: 'Aplicativo para celular',
      Image: AppCelularImg
    },
    {
      name: 'Arquivos para baixar',
      Image: ArqBaixarImg
    },
    {
      name: 'Filmes / Screencast',
      Image: FilmesImg
    },
    {
      name: 'Podcast / Audiobook',
      Image: PodcastImg
    },
    {
      name: 'Programa para baixar',
      Image: ProgBaixarImg
    },

  ]
};

export default homeProductsList;
