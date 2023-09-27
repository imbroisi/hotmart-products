import { Container, TitleBox, Title, Circle, ItemContent, Info, Name, VertLine, InternalCircle, Check } from './styles';


interface Props {
  productName: string
  progressItems: string[][]
}

const ProgessPane = ({ productName, progressItems }: Props) => (
  <Container>
    <TitleBox>
      <Title>
        Formato do produto:
      </Title>
      {productName}
    </TitleBox>
    <>
      {
        progressItems.map(([name, info], index) => (
          <ItemContent key={name}>
            <Circle index={index} />
            {index === 0 && <Check />}  
            {index === 1 && <InternalCircle />}
            {index < progressItems.length - 1 && <VertLine />}
            <Name index={index}>
              {name}
              <Info>
                {info}
              </Info>
            </Name>
          </ItemContent>
        ))
      }
    </>
  </Container>

);

export default ProgessPane;
