import React from 'react';
import image from '../../assets/empty-cart.png';
import { SimpleButton } from '../SimpleButton';
import { useNavigation } from '@react-navigation/native';
import { CartEmptyImage, CartEmptyMessage, Container} from './styles';


export function EmptyCart() {

  const { navigate } = useNavigation();

  return (
    <Container>
      <CartEmptyMessage>
          O carrinho está vazio
      </CartEmptyMessage>

      <CartEmptyImage source={image} resizeMode="contain" />

      <SimpleButton 
        title="Ver produtos"
        onPress={() => navigate("Products")}
        rounded
      />
    </Container>
  )
}