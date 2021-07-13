import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 32px;
`;

export const CartEmptyMessage = styled.Text`
  margin-top: 16px;
  font-family: ${theme.fonts.bold};
  font-size: 18px;
`;

export const CartEmptyImage = styled.Image`
  margin-top: 32px;
  width: 100%;
  height: 250px;
  margin-bottom: 24px;
`;

