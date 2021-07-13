import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Modal = styled.Modal``;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  width: 100%;
  flex: 1;
`;

export const Content = styled.View`
  background-color: #fff;
  width: 80%;
  height: 300px;
  border-radius: 16px;
  padding: 0 16px;
  elevation: 6;
`;


export const Text = styled.Text`
  margin-top: 24px;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  width: 80%;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TotalText = styled.Text`
  color: #303030;
  font-family: ${theme.fonts.regular};
  font-size: 16px;
`;

export const TotalTextPrice = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
`;
