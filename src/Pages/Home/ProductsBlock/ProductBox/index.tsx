import { goto } from 'messages';
import { Container, Image, Name, About } from './styles';

export interface ProductListTypes {
  name: string
  about: string
  image: string
  info: string
  size: string
  paths: string[]
}

const ProductBox = ({ name, about, image, info, paths, size }: ProductListTypes) => {
  const [width, height] = size.split('x');
  return (
    <Container onClick={() => goto(paths[0])}>
      <Image src={image} alt="" width={width} height={height} />
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
