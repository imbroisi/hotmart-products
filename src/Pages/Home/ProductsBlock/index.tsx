import productsList from 'data/productsList';
import ProductBox, { ProductListTypes } from './ProductBox';
import { Container } from './styles';

const ProductsBlock = () => (
  <Container>
  {
    productsList.main.map((params: ProductListTypes) => (
      <ProductBox key={params.name} {...params} />
    ))
  }
  </Container>  
);

export default ProductsBlock;
