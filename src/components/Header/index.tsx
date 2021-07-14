import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartSvg } from '../../assets/icons/Cart';
import { CartItem } from '../../assets/icons/CartItem';
import { useCart } from '../../hooks/cart';
import logo from '../../assets/logo.png';
import { Container, CartContainer } from './styles';

export function Header() {

  const { cart } = useCart();
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image source={logo} />
      <CartContainer
        onPress={() => navigate("Cart")}
      >
        {cart.length > 0 ? <CartItem />  : <CartSvg /> }
      </CartContainer>
    </Container>
  )
}