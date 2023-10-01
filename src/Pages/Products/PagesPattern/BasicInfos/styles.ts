import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 32px 280px 32px 32px;
  color: #707780;
  box-sizing: border-box;
  font-size: 15px;
  letter-spacing: normal;

  max-width: 860px;
  min-width: 512px;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  color: #27292b;
`;

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Spacer = styled.div`
  width: 30px !important;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 170px;
  border: 2px dashed #c2c7ce;
`;

export const SeeAllFormats = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  line-height: 1.5rem;
  background-color: rgba(0,0,0,0);
  border:.0625rem solid #4c74db;
  color: #355cc0;
  cursor: pointer;
  outline: 0;
  text-align: center;
  appearance: button;
  height: 42px;
  font-size: 1rem;
  padding: 0 16px;

  vertical-align: middle;

  &:hover {
    transition: .3s;
    background-color: #e8edfe;
  }
`;

export const FileInfo = styled.div`
  margin-top: 4px;
  font-size: 14px;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const CategorieItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c2c7ce;
  height: 32px;
  border-radius: 16px;
  padding: 0 16px;
  background-color: #f6f8f9;
  color: #2c2f33;
  margin: 0 8px 8px 0; 
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #e6e8e9;
  }
`;
