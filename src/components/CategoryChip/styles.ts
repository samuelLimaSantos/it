import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  padding: 4px;
  background-color: ${theme.colors.categoryChip};
  margin-top: 8px;
  margin-right: 4px;
  border-radius: 4px;
`;

export const CategoryTitle = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 10px;
`;