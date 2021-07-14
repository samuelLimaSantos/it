import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../screens/Products';
import { useToast } from './toast';
import { useLoading } from './loading';

type CartContextData  = {
  addProductToCart: (product: Product) => Promise<void>;
  removeProductInCart: (id: number) => Promise<void>;
  cart: Cart[];
  finalizeBuy: () => Promise<void>;
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
  const { showLoading } = useLoading();

  useEffect(() => {
    async function loadStorageData() {
      showLoading(true);
      const cartStorage = await AsyncStorage.getItem('@it:cart');
      showLoading(false);

      if (cartStorage) {
        
        setCart(JSON.parse(cartStorage));
      }

    }

    loadStorageData();
  }, []);

  const addProductToCart = async (newProduct: Product) => {

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

    const setUpdated =  cart.length === 0 ? [newProductIntoCart] : [...cart, newProductIntoCart];

    setCart(setUpdated);

    showLoading(true);

    await AsyncStorage.setItem('@it:cart', JSON.stringify(setUpdated));

    showLoading(false);

    showToast({
      message: 'Item adicionado ao carrinho',
      type: 'success',
      show: true,
    });
    
  };

  const removeProductInCart = async (id: number) => {

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
      await AsyncStorage.setItem('@it:cart', JSON.stringify(updatedCart));
      return 
    }

    updatedCart = cart.filter(({product}) => product.id !== id);

    setCart(updatedCart);

    showLoading(true);

    await AsyncStorage.setItem('@it:cart', JSON.stringify(updatedCart));

    showLoading(false);
  
    showToast({
      message: 'Item removido do carrinho',
      type: 'success',
      show: true,
    });
  }

  const finalizeBuy = async () => {
    setCart([]);

    showLoading(true);

    await AsyncStorage.setItem('@it:cart', JSON.stringify([]));

    showLoading(false);
  }

  return (
    <CartContext.Provider value={{ addProductToCart,  removeProductInCart, cart, finalizeBuy }}>
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