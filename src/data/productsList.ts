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

const productsList = {
  main: [
    {
      "name": "Comunidade",
      "about": "Publique conteúdos frequentpes para assinantes",
      "image": ComunidadeImg,
      "info": "TODO",
      paths: [
        'comunidade',
        'comunity',
      ],
      size: "280x146",
      progressItems: [
        ['Formato', 'Comunnidade'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
        ['Informações pessoais', 'Complete seus dados'],
        ['Configurações', 'Defina as configurações'],
        ['Termos e políticas', ''],
      ],
    },
    {
      "name": "Curso online",
      "about": "Aulas em um ambiente seguro",
      "image": CursoOnlineImg,
      "info": "TODO",
      paths: [
        'curso-online',
        'course-online',
      ],
      size: "142x130",
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
        ['Conteúdo', 'Detalhes e planejamento'],
        ['Página de vendas', 'Detalhes do seu produto'],
        ['Informações pessoais', 'Complete seus dados'],
        ['Termos e políticas', ''],
      ],
    },
    {
      "name": "Assinatura",
      "about": "Para curso online e área de membros",
      "image": AssinaturaImg,
      "info": "TODO",
      paths: [
        'assinatura',
        'signature',
      ],
      size: "180x130",
      progressItems: [
        ['Formato', 'Assinatura'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      "name": "eBook",
      "about": "Arquivos em .pdf ou ePub",
      "image": EBookImg,
      "info": "TODO",
      paths: [
        'ebook',
      ],
      size: "155x130",
      progressItems: [
        ['Formato', 'eBook'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ]
    },
    {
      "name": "Eventos online",
      "about": "Conferências, palestras, workshops",
      "image": EventosOnlineImg,
      "info": "TODO",
      paths: [
        'eventos-online',
        'online-events',
      ],
      size: "178x130",
      progressItems: [
        ['Formato', 'Assinatura'],
        ['Informações', 'Qual é o seu produto'],
        ['Datas e horários', 'Quando irá acontecer'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
  ],
  others: [
    {
      name: 'Imagem / Foto',
      paths: [
        'imagem-foto',
        'image-photo',
      ],
      Image: ImagePhotoImg,
      progressItems: [
        ['Formato', 'Imagem / Foto'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Código Fonte',
      paths: [
        'codigo-fonte',
        'source-code',
      ],
      Image: CodigoFonteImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Áudio / Música',
      paths: [
        'audio-musica',
        'audio-music',
      ],
      Image: AudioMusicaImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Aplicativo para celular',
      paths: [
        'aplicativo-celular',
        'phone-app',
        'phone-application',
      ],
      Image: AppCelularImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Arquivos para baixar',
      paths: [
        'arquivos-para-baixar',
        'download-files',
      ],
      Image: ArqBaixarImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Filmes / Screencast',
      paths: [
        'filmes-screencast',
        'movies-screencast',
      ],
      Image: FilmesImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Podcast / Audiobook',
      paths: [
        'podcast-audiobook',
      ],
      Image: PodcastImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
    {
      name: 'Programa para baixar',
      paths: [
        'programas-para-baixar',
        'download-programs',
      ],
      Image: ProgBaixarImg,
      progressItems: [
        ['Formato', 'Curso Online'],
        ['Informações', 'Qual é o seu produto'],
        ['Precificação', 'Valor e estratégia de venda'],
      ],
    },
  ]
};

export default productsList;
