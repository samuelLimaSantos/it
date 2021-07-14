import React from 'react';
import { Cart, useCart } from '../../hooks/cart';
import { returnImage } from '../../utils/returnImage';
import { PlusLessButton } from '../PlusLessButton';
import {
  Container,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice
} from './styles';

type Props = {
  data: Cart;
}

export function CartListItem({data}: Props) {

  const productImage = returnImage(data.product.image);

  const { addProductToCart, removeProductInCart } = useCart();

  async function addProduct() {
    await addProductToCart(data.product);
  }

  async function removeProduct() {
    await removeProductInCart(data.product.id);
  }

  return (
    <Container>
      <ProductImage source={productImage} resizeMode="cover"/>

      <ProductDescription>
        <ProductName>
          {data.product.name}
        </ProductName>

        <ProductPrice>
          {data.product.price}
        </ProductPrice>
      </ProductDescription>

      <PlusLessButton 
        indicator={data.quantity}
        less={removeProduct}
        plus={addProduct}
      
      />
    </Container>
  )
}