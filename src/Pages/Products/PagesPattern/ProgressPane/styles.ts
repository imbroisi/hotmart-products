import styled from 'styled-components';
import { ReactComponent as CheckOriginal } from 'assets/check.svg'; 

export const Container = styled.div`
  width: 286px;
  border-right: 1px solid #e2e6ea;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e2e6ea;
  height: 70px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  color: #697179
`;

export const ItemContent = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
`;

export const Circle = styled.div<{ index: number }>`
  border: 1px solid;
  border-radius: 50%;
  min-width: 25px;
  max-width: 25px;
  height: 25px;
  background-color: ${({ index }) => index === 0 ? '#c8d7fd' : index === 1 ? '#4c74db' : 'white'};
  border-color: ${({ index }) => index === 0 ? '#c8d7fd' : index === 1 ? '#4c74db' : '#c2c7ce'};
`;

export const InternalCircle = styled.div`
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  color: white;
  left: 10px;
  top: 10px;
  background-color: white;

`;

export const Name = styled.div<{ index: number }>`
  font-weight: 700;
  margin-left: 8px;
  padding-top: 3px;
  color: ${({ index }) => index === 0 ? '#adb2ad' : '#inherit'};
  font-weight: ${({ index }) => index === 1 ? 700 : 400};

`;

export const Info = styled.div`
  font-size: 0.75rem;
  color: #adb2ad;
  font-weight: 400;
`;

export const VertLine = styled.div`
  position: absolute;
  height: 100%;
  border-left: 1px solid #c2c7ce;
  top: 25px;
  left: 13px;
  z-index: -1;
`;

export const Check = styled(CheckOriginal)`
  position: absolute;
  left: 7px;
  top: 7px;
  color: white;
`;
