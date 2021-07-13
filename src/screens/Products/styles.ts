import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Product } from './index';
import { FlatList } from 'react-native';


export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${Constants.statusBarHeight}px 20px;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  margin-top: 32px;
`;