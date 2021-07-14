import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title';
import { 
  Modal, 
  Container, 
  Content,
  Text,
  TotalContainer,
  TotalText,
  TotalTextPrice,
} from './styles';
import { SimpleButton } from '../SimpleButton';
import { Pressable } from 'react-native';
import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  redirect: string;
  totalPrice: string;
}

export function ModalConfirm({ modalVisible, setModalVisible, redirect, totalPrice }: Props) {

  const { navigate } = useNavigation();
  const { finalizeBuy } = useCart();
  const { showToast } = useToast();
  
  const finalize = async () => {
    setModalVisible(false);
    navigate(redirect);
    await finalizeBuy();
    showToast({
      message: 'Compra realizada com sucesso',
      show: true,
      type: 'success'
    })
  };

  const back = () => {
    setModalVisible(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={back}
    >
      <Container>
        <Content>
          <Title 
            title="Compra"
            titleBold="Finalizada"
          />

          <Text>
            Sua compra foi finalizada com sucesso!
          </Text>

          <TotalContainer>
            <TotalText>
              valor da compra:
            </TotalText>

            <TotalTextPrice>
              {totalPrice}
            </TotalTextPrice>
          </TotalContainer>


          <Pressable
            onPress={finalize}
          >
            <SimpleButton 
              rounded
              title="Voltar para a Home"
            />
          </Pressable>
        </Content>
      </Container>
    </Modal>
  )
}