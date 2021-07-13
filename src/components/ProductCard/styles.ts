import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  width: 170px;
  min-height: 200px;
  flex-direction: column;
  background-color: ${theme.colors.cardBackground};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-bottom: 16px;
`;


export const ProductImage = styled.Image`
  width: 100%;
  height: 80px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const DescriptionContainer = styled.View`
  padding: 8px 8px;
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DescriptionText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 10px;
`;

export const DescriptionCategories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
