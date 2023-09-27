import PagesPattern from '../PagesPattern';

const MainProducts = ({ data }: any) => {
  return (
  <PagesPattern
    productName={data.name}
    progressItems={data.progressItems}
  />
);
  }

export default MainProducts;
