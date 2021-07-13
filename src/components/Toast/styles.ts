import styled from 'styled-components/native';
import { theme } from '../../global/styles';

export const Container = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 999999;
`;

export const ToastBackground = styled.TouchableOpacity<{ type: 'success' | 'error'}>`
  background-color: ${props => props.type === 'success' ? theme.colors.toastSuccess : theme.colors.toastError};
  width: 90%;
  height: 50px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  color: ${theme.colors.base};
`;