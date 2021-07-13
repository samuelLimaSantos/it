import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text'
import { theme } from '../../global/styles';

export const Container = styled.View``;

export const Label = styled.Text`
  margin-left: 8px;
  margin-bottom: 8px;
  font-family: ${theme.fonts.regular};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Input = styled(TextInputMask)`
  height: 50px;
  flex: 1;
  border-width: 1px;
  border-color: ${theme.colors.primary};
  padding: 16px;
  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;


export const ZipSpecification = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${theme.colors.cardBackground};
  border-radius: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ZipDescription = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.regular};
  line-height: 32px;
  font-size: 14px;
`;

export const Bold = styled.Text`
  font-family: ${theme.fonts.bold};
  font-size: 16px;
`;