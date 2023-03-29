import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FieldInput = styled.input`
  height: 40px;
  border-radius: 20px;
  border: 1px solid #D27685;
  padding: 0 20px;
  font-size: 16px;
  color: #D27685;
  margin-right: 10px;
`;

export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #D27685;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #9E4784;
  }

  &:active {
    background-color: #66347F;
  }
`;