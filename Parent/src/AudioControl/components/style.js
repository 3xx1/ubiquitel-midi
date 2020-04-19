import styled from 'styled-components'

export const AudioControlContainer = styled.div`
  width: 250px;
  border-radius: 5px;
  background: #aaa;
  margin: auto;
  padding: 5px;
`;

export const ButtonContainer = styled.button`
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 8px;
  padding: 5px;

  &:hover {
    background: #DDD;
  }
`;