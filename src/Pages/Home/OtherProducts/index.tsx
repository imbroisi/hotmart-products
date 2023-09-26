import productsList from 'data/homeProductsList';
import { Container, Content, ImgContainer, ProductsList } from './styles';

const OtherProducts = () => (
  <Container>
    Outro formato? Escolha abaixo:
    <ProductsList>
    {
      productsList.others.map(({ name, Image }) => {
        return (
          <Content key={name}>
            <ImgContainer>
              <Image />
            </ImgContainer>
            <div>
              {name}
            </div>
          </Content> 
        )
      })
    }
    </ProductsList>
  </Container> 
);

export default OtherProducts;
