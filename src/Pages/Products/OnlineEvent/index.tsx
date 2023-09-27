import PagesPattern from '../PagesPattern';

const progressItems = [
  ['Formato', 'Assinatura'],
  ['Informações', 'Qual é o seu produto'],
  ['Datas e horários', 'Quando irá acontecer'],
  ['Precificação', 'Valor e estratégia de venda'],
];

const OnlineEvent = () => (
  <PagesPattern productName="Evento Online" progressItems={progressItems} />
);

export default OnlineEvent;
