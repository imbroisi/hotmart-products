import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 36px;
  
`;

export const ProductsList = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, 300px);
  margin-top: 36px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  color: #355cc0;
  cursor: pointer;
  margin-bottom: 8px;
`; 

export const ImgContainer = styled.div`
  width: 2.1875rem;
  height: 2.1875rem;
  background-color: #355cc0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-right: 0.5rem;
  color: white;
`;
