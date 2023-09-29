import Header from './Header';
import OtherProducts from './OtherProducts';
import ProductsBlock from './ProductsBlock';
import { Container, Content } from './styles';


const Home = () => {
  return (
    <Container>
      <Content>
        <Header />
        <ProductsBlock />
        <OtherProducts />
      </Content>
    </Container>
  );
}

export default Home;
