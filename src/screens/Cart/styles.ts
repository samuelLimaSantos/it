import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Cart } from '../../hooks/cart';
import { theme } from '../../global/styles';

export const CartContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #f3f3f3;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const CartList = styled(FlatList as new () => FlatList<Cart>)`
  margin-top: 16px;
`;

export const Divider = styled.View`
  width: 60px;
  height: 4px;
  border-radius: 8px;
  background-color: ${theme.colors.divider};
  margin: 8px auto;
`;

export const TotalContainer = styled.View`
  width: 100%;
  margin-bottom: 24px;
  padding: 0 16px;
`;

export const Shipping = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-family: ${theme.fonts.regular};

`;

export const Items = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
`;

export const RegularText = styled.Text<{color?: string, disabled?: boolean}>`
  color: ${props => props.color ? props.color : '#000'};
  
`;

export const RegularTextFinalize =  styled.Text<{ disabled?: boolean }>`
  color: ${props => props.disabled ? theme.colors.cardBackgroundDisabled : '#fff'};
  font-family: ${theme.fonts.regular};
`;

export const BoldTextFinalize = styled.Text<{ disabled?: boolean }>`
  color: ${props => props.disabled ? theme.colors.cardBackgroundDisabled : '#fff'};
  font-size: 16px;
  font-family: ${theme.fonts.bold};
`;

export const BoldText = styled.Text<{color?: string}>`
  font-size: 16px;
  font-family: ${theme.fonts.bold};
  color: ${props => props.color ? props.color : '#000'};
`;

export const BoldTextPrice = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
`;

export const FinalizeContainer = styled.TouchableOpacity`
  height: 100px;
  
  width: 100%;
  margin-top: -32px;
  padding: 32px 20px 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: -999;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;