import React from 'react';
import { CategoryTitle, Container } from './styles';

type Props = {
  title: string;
}

export function CategoryChip({ title }: Props) {
  return (
    <Container>
      <CategoryTitle>
        {title}
      </CategoryTitle>
    </Container>
  )
}