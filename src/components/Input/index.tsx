import { Container, InputStyled, Label } from './styles';

const Input = (props: any) => (
  <Container>
    <Label>{props.label}</Label>
    <InputStyled {...props} /> 
  </Container>
);

export default Input;
