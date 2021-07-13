import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View<{ rounded?: boolean}>`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: ${props => props.rounded ? '8px' : 0};
  border-top-right-radius: ${props => props.rounded  ? '8px' : 0};
  height: 46px;
  background-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  height: 40px;
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${theme.colors.base};
`;

export const IconContainer = styled.View`
  margin-right: 8px;
`;