import PagesPattern from '../PagesPattern';

const progressItems = [
  ['Formato', 'Assinatura'],
  ['Informações', 'Qual é o seu produto'],
  ['Precificação', 'Valor e estratégia de venda'],
];

const Signature = () => (
  <PagesPattern productName="Assinatura" progressItems={progressItems} />
);

export default Signature;
