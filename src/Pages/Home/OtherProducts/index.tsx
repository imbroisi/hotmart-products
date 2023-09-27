import productsList from 'data/homeProductsList';
import { Container, Content, ImgContainer, ProductsList } from './styles';
import { goto } from 'messages';

const OtherProducts = () => (
  <Container>
    Outro formato? Escolha abaixo:
    <ProductsList>
      {
        productsList.others.map(({ name, Image, path }) => {
          return (
            <Content key={name} onClick={() => goto(`products${path}`)}>
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
