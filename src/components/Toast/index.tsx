import React, { useEffect } from 'react';
import { ToastInfo, useToast } from '../../hooks/toast';
import { Container, ToastBackground, Message } from './styles';

type Props = {
  type: 'success' | 'error';
  message: string;
  showToast: React.Dispatch<React.SetStateAction<ToastInfo>>;
}

export function Toast({type, message, showToast}: Props) {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      showToast({
        message: '',
        type: 'success',
        show: false,
      });

    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [showToast]);

  return (
    <Container>
      <ToastBackground
        type={type}
        style={{ elevation: 2 }}
        activeOpacity={0.8}
      >
        <Message>
          {message}
        </Message>
      </ToastBackground>    
    </Container>
  )
}