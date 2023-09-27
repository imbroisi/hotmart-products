import PagesPattern from '../PagesPattern';

const progressItems = [
  ['Formato', 'Comunnidade'],
  ['Informações', 'Qual é o seu produto'],
  ['Precificação', 'Valor e estratégia de venda'],
  ['Informações pessoais', 'Complete seus dados'],
  ['Configurações', 'Defina as configurações'],
  ['Termos e políticas', ''],
];

const Comunity = () => (
  <PagesPattern productName="Comunidade" progressItems={progressItems} />
);

export default Comunity;
