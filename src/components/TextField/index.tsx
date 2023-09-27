import { TextFieldStyled, Label } from './styles';

const TextField = (props: any) => (
  <>
    <Label>{props.label}</Label>
    <TextFieldStyled {...props} /> 
  </>
);

export default TextField;
