import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Title, IconContainer, Container } from './styles';
import image from '../../assets/img-1.png'

type Props = RectButtonProps & {
  title: string;
  icon?: Function;
}

export function SimpleButton({ title, icon: Icon, ...rest}: Props) {

  return (
    <Container >

    <Button {...rest} >
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}

      <Title>
        {title}
      </Title>
    </Button>
    </Container>
  );
}