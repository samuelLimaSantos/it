import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Title, IconContainer, Container } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon?: Function;
  rounded?: boolean;
}

export function SimpleButton({ title, icon: Icon, rounded, ...rest}: Props) {

  return (
    <Container rounded={rounded}>
      <Button {...rest}>
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