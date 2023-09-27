import Input from 'components/Input';
import { Box, CategorieItem, Categories, Container, DivFlex, FileInfo, SeeAllFormats, Spacer, Title } from './styles';
import TextField from 'components/TextField';
import { Label } from 'components/Input/styles';
import Tooltip from 'components/Tooltip';

const categories = [
  'Saúde e Esportes',
  'Finanças e Investimentos',
  'Relacionamentos',
  'Negócios e Carreira',
  'Espiritualidade',
  'Sexualidade',
  'Entretenimento',
  'Culinária e Gastronomia',
  'Idiomas',
  'Direito',
  'App & Software',
  'Literatura',
  'Casa e COnstrução',
  'Desenvolvimento Pessoal',
  'Moda e Beleza',
  'Animais e Plantas',
  'Educacional',
  'Hobbies',
  'Design',
  'Internet',
  'Ecologia e Meio Ambiente',
  'Música e Artes',
  'Tecnoligia da Informação',
  'Empreendedorismo Digital',
  'Outros',
];

const BasicInfos = () => (
  <Container>
    <Title>
      Informações básicas
    </Title>
    Os dados abaixo são muito importantes para seu produto. Preencha-os com atenção.

    <Input label="Nome do Produto" placeholder="Coloque um nome que chame a atenção de seus compradores" />
    <TextField
      label="Descrição"
      placeholder="Fale do que se trata seu produto e o que ele oferece, de forma clara e breve."
      rows="5"
    />
    <DivFlex>
      <Input label="Idioma do Produto" placeholder="Em que língua será seu produto" />
      <Spacer />
      <Input label="Principal país de vendas" placeholder="Em que país você deseja vender" />
    </DivFlex>
    <br />
    <Label>
      Imagem do seu produto
    </Label>
    <Tooltip title="Ainda não implementado" placement="right" arrow color="orange">
      <Box>
        <div>
          Arraste o arquivo para cá
        </div>
        <div>
          ou
        </div>
        <SeeAllFormats>
          Selecione um arquivo
        </SeeAllFormats>
      </Box>
    </Tooltip>
    <FileInfo dangerouslySetInnerHTML={{ __html: 'A imagem escolhida deve estar no formato JPG ou PNG e ter no máximo 5 MB de tamanho. Dimensões&nbsp;ideais:&nbsp;600x600&nbsp;pixels.' }} />
    <br />
    <Label>
      Categoria do Produto
    </Label>
    <FileInfo>
      É através dela que seus compradores encontrarão seu produto mais facilmente.
    </FileInfo>
    <Tooltip title="Ainda não implementado" placement="right" arrow color="orange">
      <Categories>
        {categories.map(item => (
          <CategorieItem key={item}>
            {item}
          </CategorieItem>
        ))
        }
      </Categories>
    </Tooltip>
  </Container>
);

export default BasicInfos;

