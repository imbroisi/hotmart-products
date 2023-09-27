import BasicInfos from './BasicInfos';
import ProgressPane from './ProgressPane';
import { Container } from './styles';

interface Props {
  productName: string
  progressItems: string[][]
}

const PagesPattern = ({ productName, progressItems }: Props) => (
  <Container>
    <ProgressPane productName={productName} progressItems={progressItems} />
    <BasicInfos />
  </Container>
  
);

export default PagesPattern;
