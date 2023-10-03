import productsList from 'data/productsList';
import { Container, Content, ImgContainer, ProductsList } from './styles';
import { goto } from 'messages';

const OtherProducts = () => (
  <Container>
    Outro formato? Escolha abaixo:
    <ProductsList>
      {
        productsList.others.map(({ name, Image, paths }) => {
          return (
            <Content key={name} onClick={() => goto(paths[0])}>
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
