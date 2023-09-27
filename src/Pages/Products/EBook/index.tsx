import PagesPattern from '../PagesPattern';

const progressItems = [
  ['Formato', 'eBook'],
  ['Informações', 'Qual é o seu produto'],
  ['Precificação', 'Valor e estratégia de venda'],
];

const EBook = () => (
  <PagesPattern productName="eBook" progressItems={progressItems} />
);

export default EBook;
