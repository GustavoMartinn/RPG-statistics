import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const FieldTitle = styled.h3`
  font-size: 24px;
  color: #D27685;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
`;

export const ValueInput = styled.input`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #D27685;
  padding: 0 20px;
  font-size: 16px;
  color: #D27685;
`;

export const RemoveButton = styled.button`
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