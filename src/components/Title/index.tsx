import React from 'react';
import { TitleBold, TitleContainer} from './styles';

type Props = {
  title: string;
  titleBold: string;
}

export function Title({ title, titleBold }: Props) {
  return (
    <TitleContainer> 
      {title}{'\n'}
      <TitleBold>
        {titleBold}
      </TitleBold>
    </TitleContainer>
  )
}