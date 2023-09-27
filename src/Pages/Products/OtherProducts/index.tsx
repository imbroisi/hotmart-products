import PagesPattern from '../PagesPattern';

// const progressItems = [
//   ['Formato', 'Curso Online'],
//   ['Informações', 'Qual é o seu produto'],
//   ['Precificação', 'Valor e estratégia de venda'],
//   ['Conteúdo', 'Detalhes e planejamento'],
//   ['Página de vendas', 'Detalhes do seu produto'],
//   ['Informações pessoais', 'Complete seus dados'],
//   ['Termos e políticas', ''],
// ];

const OtherProducts = ({ data }: any) => {
  return (
  <PagesPattern
    productName={data.name}
    progressItems={data.progressItems}
  />
);
  }

export default OtherProducts;
