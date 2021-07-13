import React from 'react';
import { Less } from '../../assets/icons/Less';
import { Plus } from '../../assets/icons/Plus';
import {
  Container,
  Indicator,
  LessButton,
  PlusButton
} from './styles';

type Props = {
  indicator: number;
  plus: () => void;
  less: () => void;
}

export function PlusLessButton({ indicator, plus, less }: Props) {
  return (
    <Container>
      <PlusButton onPress={plus}>
        <Plus />
      </PlusButton>

      <Indicator>
        {indicator}
      </Indicator>

      <LessButton onPress={less} disabled={indicator === 0} >
        <Less />
      </LessButton>
    </Container>    
  )
}