import React from 'react';
import { theme } from '../../global/styles';
import { Container, LoadingComponent } from './styles';

export function Loading() {
  return (
    <Container>
      <LoadingComponent 
        size="large"
        color={theme.colors.primary}
      />
    </Container>
  )
}