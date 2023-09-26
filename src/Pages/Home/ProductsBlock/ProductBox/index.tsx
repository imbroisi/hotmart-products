import { goto } from 'messages';
import { Container, Image, Name, About } from './styles';

export interface ProductListTypes {
  name: string
  about: string
  image: string
  info: string
  size: string
  path: string
}

const ProductBox = ({ name, about, image, info, path, size }: ProductListTypes) => {
  const [width, height] = size.split('x');
  return (
    <Container onClick={() => goto(path)}>
      {/* <ImageContainer width={width} height={height}> */}
        <Image src={image} alt="" width={width} height={height} />
      {/* </ImageContainer> */}
      <Name>
        {name}
      </Name>
      <About>
        {about}
      </About>
    </Container>
  );
};

export default ProductBox;
