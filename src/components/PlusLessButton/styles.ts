import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  padding: 8px;
`;

export const PlusButton = styled.TouchableOpacity`
  padding: 6px;
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

export const Indicator = styled.Text`
  background-color: ${theme.colors.cardBackground};
  font-family: ${theme.fonts.bold};
  font-size: 14px;
  padding: 6px;
  text-align: center;
  margin-bottom: 4px;
`;

export const LessButton =  styled.TouchableOpacity`
  padding: 6px;
  height: 25px;

  justify-content: center;
  align-items: center;

`;