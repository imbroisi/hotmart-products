import Header from './Header';
import OtherProducts from './OtherProducts';
import ProductsBlock from './ProductsBlock';
import { Container, Content } from './styles';


const Home = () => {
  console.log('+++++++++++========> NODE_ENV', process.env.NODE_ENV)
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
