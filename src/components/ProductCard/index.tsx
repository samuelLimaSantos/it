import React from 'react';
import { Product } from '../../screens/Products';
import { returnImage } from '../../utils/returnImage';
import { CategoryChip } from '../CategoryChip';
import { SimpleButton } from '../SimpleButton';
import { AddCart } from '../../assets/icons/AddCart';
import {
  Container,
  ProductImage,
  ProductTitle,
  DescriptionContainer,
  DescriptionText,
  DescriptionCategories
} from './styles';

type Props = {
  data: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({ data, addToCart } : Props) {
  
  const image = returnImage(data.image);

  return (
    <Container>
      <ProductImage 
        source={image}
        resizeMode="stretch"
      />

      <DescriptionContainer>
        <ProductTitle>
          {data.name}
        </ProductTitle>
        <DescriptionText>
          Plataforma: {data.platform}
        </DescriptionText>

        <DescriptionText>
          Categoria/Gênero:
        </DescriptionText>

        <DescriptionCategories>
          {data.categories.map(category => <CategoryChip key={category} title={category}/>)}
        </DescriptionCategories>
      </DescriptionContainer>

      <SimpleButton 
        title={data.price}
        icon={AddCart}
        onPress={() => addToCart(data)}
      />
    </Container>
  )
}