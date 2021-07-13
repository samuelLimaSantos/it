import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ProductDescription = styled.View`
  width: 150px;
  margin-right: 32px;
`;

export const ProductName = styled.Text`
  margin-bottom: 4px;
  font-family: ${theme.fonts.regular};
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 16px;
`;


