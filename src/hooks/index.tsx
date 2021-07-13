import React, { ReactNode } from 'react';

import { CartProvider } from './cart';
import { LoadingProvider } from './loading';
import { ToastProvider } from './toast';

type Props = {
  children: ReactNode;
}

const AppProvider = ({ children }: Props ) => (
  <LoadingProvider>
    <ToastProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ToastProvider>
  </LoadingProvider>
);

export { AppProvider };