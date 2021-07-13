import React, { 
  useState,
  useEffect,
  useCallback
} from 'react';
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';
import { Title } from '../../components/Title';
import { useCart } from '../../hooks/cart';
import { useLoading } from '../../hooks/loading';
import { useToast } from '../../hooks/toast';
import { api } from '../../services/api';
import { 
  Container,
  ProductList
} from './styles';

export type Product = {
  id: number;
  name: string;
  platform: string;
  categories: string[];
  image: string;
  price: string;
};

export function Products() {

  const [ products, setProducts ] = useState<Product[]>([]);

  const { showLoading } = useLoading();
  const { addProductToCart } = useCart();
  const { showToast } = useToast();

  const handleGetProducts = useCallback(async () => {
    try {
      showLoading(true);

      const response = await api.get<Product[]>('/products');
      
      showLoading(false);
  
      setProducts(response.data);
    } catch (error) {
      showLoading(false);
      showToast({
        message: 'Ocorreu um erro ao buscar os produtos',
        show: true,
        type: 'error'
      })
    }
  }, []);


  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <Container>
      <Header />

      <Title 
        title="Games"
        titleBold="Populares"
      />  

      <ProductList 
        data={products}
        renderItem={({ item }) => <ProductCard data={item} addToCart={addProductToCart}/>}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </Container>
  )
}