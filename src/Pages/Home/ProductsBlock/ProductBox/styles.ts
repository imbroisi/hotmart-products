import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* margin-right: 40px; */
  border: 1px solid #e2e6ea;
  border-radius: 4px;
  /* width: 100%; */
  height: 295px;
  max-width: 322px;
  min-width: 240px;
  cursor: pointer;
  box-sizing: border-box;
  /* padding-bottom: 20px; */

  /* max-width: 296px; */
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 5px 5px 20px rgba(128,128,128,.2); 
  }

  &:last-child {
    margin-right: 0;
  }

  height: 300px;

`;

export const Image = styled.img`
  /* display: block; */
  top: 0;
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* height: 100%; */
  /* width: auto; */
  margin: 28px 0 32px;

  /* height: 168px; */
  scale: 1.15;

  /* border: 1px solid red; */

`;

export const Name = styled.div`
  color: #32363b;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 12px;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 3em;
  width: 90%;
  color: #707780;
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 300;
  line-height: 150%;
  font-size: 15px;
`;
