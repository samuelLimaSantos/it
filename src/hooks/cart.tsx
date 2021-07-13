import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { Product } from '../screens/Products';
import { useToast } from './toast';

type CartContextData  = {
  addProductToCart: (product: Product) => void;
  removeProductInCart: (id: number) => void;
  cart: Cart[];
}

export type Cart = {
  quantity: number;
  product: Product;
}

type Props = {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: Props) => {
  const [ cart, setCart ] = useState<Cart[]>([]);

  const { showToast } = useToast();

  const addProductToCart = (newProduct: Product) => {

    const productAlreadyInCart = cart.findIndex(({product}) => product.id === newProduct.id);

    let updatedCart = cart;
    
    if (productAlreadyInCart !== -1) {
      ++updatedCart[productAlreadyInCart].quantity;
      setCart(updatedCart);
      showToast({
        message: 'Item adicionado ao carrinho',
        type: 'success',
        show: true,
      });
      return 
    }

    const newProductIntoCart = {
      quantity: 1,
      product: newProduct,
    }

    cart.length === 0 ? setCart([newProductIntoCart]) : setCart([...cart, newProductIntoCart]);

    showToast({
      message: 'Item adicionado ao carrinho',
      type: 'success',
      show: true,
    });
    
  };

  const removeProductInCart = (id: number) => {

    const productAlreadyInCart = cart.findIndex(({product}) => product.id === id);

    let updatedCart = cart;
    
    if (cart[productAlreadyInCart].quantity > 1) {
      --updatedCart[productAlreadyInCart].quantity;
      setCart(updatedCart);
      showToast({
        message: 'Item removido do carrinho',
        type: 'success',
        show: true,
      });
      return 
    }

    updatedCart = cart.filter(({product}) => product.id !== id);

    setCart(updatedCart);
  
    showToast({
      message: 'Item removido do carrinho',
      type: 'success',
      show: true,
    });
  }

  return (
    <CartContext.Provider value={{ addProductToCart,  removeProductInCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useAuth must be used within an CartProvider');
  }

  return context;
}